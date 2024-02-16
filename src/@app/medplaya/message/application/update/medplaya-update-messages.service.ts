import { MedplayaAddMessagesContextEvent, MedplayaIMessageRepository, MedplayaMessage } from '@app/medplaya/message';
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
export class MedplayaUpdateMessagesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        payload: {
            id?: MedplayaMessageId;
            question?: MedplayaMessageQuestion;
            chatResponse?: MedplayaMessageChatResponse;
            clientId?: MedplayaMessageClientId;
        },
        queryStatement?: QueryStatement,
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

        // update
        await this.repository.update(
            message,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const messages = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const messagesRegister = this.publisher.mergeObjectContext(
            new MedplayaAddMessagesContextEvent(messages),
        );

        messagesRegister.updated(); // apply event to model events
        messagesRegister.commit(); // commit all events of model
    }
}
