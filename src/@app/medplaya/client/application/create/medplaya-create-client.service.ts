import { MedplayaClient, MedplayaIClientRepository } from '@app/medplaya/client';
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
export class MedplayaCreateClientService
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
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const client = MedplayaClient.register(
            payload.id,
            payload.name,
            payload.lastname,
            payload.username,
            payload.checkin,
            payload.checkout,
            payload.code,
            payload.room,
            payload.status,
            payload.tags,
            payload.otherTags,
            payload.isActive,
            payload.amount,
            new MedplayaClientCreatedAt({ currentTimestamp: true }),
            new MedplayaClientUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            client,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const clientRegister = this.publisher.mergeObjectContext(
            client,
        );

        clientRegister.created(client); // apply event to model events
        clientRegister.commit(); // commit all events of model
    }
}
