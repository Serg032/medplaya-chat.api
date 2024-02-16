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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaCreateMessagesService
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
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateMessages = payload.map(message => MedplayaMessage.register(
            message.id,
            message.question,
            message.chatResponse,
            message.clientId,
            new MedplayaMessageCreatedAt({ currentTimestamp: true }),
            new MedplayaMessageUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateMessages,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddMessagesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const messagesRegistered = this.publisher.mergeObjectContext(new MedplayaAddMessagesContextEvent(aggregateMessages));

        messagesRegistered.created(); // apply event to model events
        messagesRegistered.commit(); // commit all events of model
    }
}
