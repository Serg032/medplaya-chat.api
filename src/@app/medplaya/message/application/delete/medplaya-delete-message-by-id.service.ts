import { MedplayaIMessageRepository } from '@app/medplaya/message';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaDeleteMessageByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        id: MedplayaMessageId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const message = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                message.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const messageRegister = this.publisher.mergeObjectContext(message);

        messageRegister.deleted(message); // apply event to model events
        messageRegister.commit(); // commit all events of model
    }
}
