import { MedplayaIMessageRepository, MedplayaMessage } from '@app/medplaya/message';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageCreatedAt,
    MedplayaMessageDeletedAt,
    MedplayaMessageId,
    MedplayaMessageQuestion,
    MedplayaMessageUpdatedAt,
} from '@app/medplaya/message/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaUpdateMessageByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        payload: {
            id: MedplayaMessageId;
            question?: MedplayaMessageQuestion;
            chatResponse?: MedplayaMessageChatResponse;
            clientId?: MedplayaMessageClientId;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const message = MedplayaMessage.register(
            payload.id,
            payload.question,
            payload.chatResponse,
            payload.clientId,
            null, // createdAt
            new MedplayaMessageUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            message,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const messageRegister = this.publisher.mergeObjectContext(
            message,
        );

        messageRegister.updated(message); // apply event to model events
        messageRegister.commit(); // commit all events of model
    }
}
