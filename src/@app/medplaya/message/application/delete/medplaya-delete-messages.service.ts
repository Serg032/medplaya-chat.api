import { MedplayaAddMessagesContextEvent, MedplayaIMessageRepository } from '@app/medplaya/message';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaDeleteMessagesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const messages = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (messages.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddMessagesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const messagesRegistered = this.publisher.mergeObjectContext(
            new MedplayaAddMessagesContextEvent(messages),
        );

        messagesRegistered.deleted(); // apply event to model events
        messagesRegistered.commit(); // commit all events of model
    }
}
