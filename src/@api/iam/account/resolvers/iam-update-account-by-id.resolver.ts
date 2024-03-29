import { IamAccount, IamUpdateAccountByIdInput } from '@api/graphql';
import { IamUpdateAccountByIdHandler } from '@api/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('iam.account.update')
export class IamUpdateAccountByIdResolver
{
    constructor(
        private readonly handler: IamUpdateAccountByIdHandler,
    ) {}

    @Mutation('iamUpdateAccountById')
    async main(
        @Args('payload') payload: IamUpdateAccountByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<IamAccount>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
