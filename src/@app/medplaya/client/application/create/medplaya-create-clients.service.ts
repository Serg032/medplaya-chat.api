import { MedplayaAddClientsContextEvent, MedplayaClient, MedplayaIClientRepository } from '@app/medplaya/client';
import {
    MedplayaClientAmount,
    MedplayaClientCheckin,
    MedplayaClientCheckout,
    MedplayaClientCode,
    MedplayaClientCreatedAt,
    MedplayaClientDeletedAt,
    MedplayaClientId,
    MedplayaClientIsActive,
    MedplayaClientLastname,
    MedplayaClientName,
    MedplayaClientOtherTags,
    MedplayaClientRoom,
    MedplayaClientStatus,
    MedplayaClientTags,
    MedplayaClientUpdatedAt,
    MedplayaClientUsername,
} from '@app/medplaya/client/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MedplayaCreateClientsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MedplayaIClientRepository,
    ) {}

    async main(
        payload: {
            id: MedplayaClientId;
            name: MedplayaClientName;
            lastname: MedplayaClientLastname;
            username: MedplayaClientUsername;
            checkin: MedplayaClientCheckin;
            checkout: MedplayaClientCheckout;
            code: MedplayaClientCode;
            room: MedplayaClientRoom;
            status: MedplayaClientStatus;
            tags: MedplayaClientTags;
            otherTags: MedplayaClientOtherTags;
            isActive: MedplayaClientIsActive;
            amount: MedplayaClientAmount;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateClients = payload.map(client => MedplayaClient.register(
            client.id,
            client.name,
            client.lastname,
            client.username,
            client.checkin,
            client.checkout,
            client.code,
            client.room,
            client.status,
            client.tags,
            client.otherTags,
            client.isActive,
            client.amount,
            new MedplayaClientCreatedAt({ currentTimestamp: true }),
            new MedplayaClientUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateClients,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddClientsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const clientsRegistered = this.publisher.mergeObjectContext(new MedplayaAddClientsContextEvent(aggregateClients));

        clientsRegistered.created(); // apply event to model events
        clientsRegistered.commit(); // commit all events of model
    }
}
