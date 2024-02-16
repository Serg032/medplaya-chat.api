import { IamIUserRepository, IamUser } from '@app/iam/user';
import {
    IamUserAccountId,
    IamUserAvatar,
    IamUserCreatedAt,
    IamUserDeletedAt,
    IamUserId,
    IamUserLangId,
    IamUserMeta,
    IamUserMobile,
    IamUserName,
    IamUserPassword,
    IamUserRememberToken,
    IamUserSurname,
    IamUserUpdatedAt,
    IamUserUsername,
} from '@app/iam/user/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IamUpdateUserByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IamIUserRepository,
    ) {}

    async main(
        payload: {
            id: IamUserId;
            accountId?: IamUserAccountId;
            name?: IamUserName;
            surname?: IamUserSurname;
            avatar?: IamUserAvatar;
            mobile?: IamUserMobile;
            langId?: IamUserLangId;
            username?: IamUserUsername;
            password?: IamUserPassword;
            rememberToken?: IamUserRememberToken;
            meta?: IamUserMeta;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const user = IamUser.register(
            payload.id,
            payload.accountId,
            payload.name,
            payload.surname,
            payload.avatar,
            payload.mobile,
            payload.langId,
            payload.username,
            payload.password,
            payload.rememberToken,
            payload.meta,
            null, // createdAt
            new IamUserUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            user,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const userRegister = this.publisher.mergeObjectContext(
            user,
        );

        userRegister.updated(user); // apply event to model events
        userRegister.commit(); // commit all events of model
    }
}
