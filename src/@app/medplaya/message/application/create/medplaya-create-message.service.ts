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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaCreateMessageService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        payload: {
            id: MedplayaMessageId;
            question: MedplayaMessageQuestion;
            chatResponse: MedplayaMessageChatResponse;
            clientId: MedplayaMessageClientId;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const message = MedplayaMessage.register(
            payload.id,
            payload.question,
            payload.chatResponse,
            payload.clientId,
            new MedplayaMessageCreatedAt({ currentTimestamp: true }),
            new MedplayaMessageUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            message,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const messageRegister = this.publisher.mergeObjectContext(
            message,
        );

        messageRegister.created(message); // apply event to model events
        messageRegister.commit(); // commit all events of model
    }
}
