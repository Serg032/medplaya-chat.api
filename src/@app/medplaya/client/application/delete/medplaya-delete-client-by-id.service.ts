import { MedplayaIClientRepository } from '@app/medplaya/client';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaDeleteClientByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIClientRepository,
    ) {}

    async main(
        id: MedplayaClientId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const client = await this.repository
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
                client.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const clientRegister = this.publisher.mergeObjectContext(client);

        clientRegister.deleted(client); // apply event to model events
        clientRegister.commit(); // commit all events of model
    }
}
