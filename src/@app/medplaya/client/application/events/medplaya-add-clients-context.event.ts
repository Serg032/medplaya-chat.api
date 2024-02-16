import { MedplayaClient, MedplayaCreatedClientEvent, MedplayaCreatedClientsEvent, MedplayaDeletedClientEvent, MedplayaDeletedClientsEvent, MedplayaUpdatedAndIncrementedClientEvent, MedplayaUpdatedAndIncrementedClientsEvent, MedplayaUpdatedClientEvent, MedplayaUpdatedClientsEvent } from '@app/medplaya/client';
import { AggregateRoot } from '@nestjs/cqrs';

export class MedplayaAddClientsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: MedplayaClient[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new MedplayaCreatedClientsEvent(
                this.aggregateRoots.map(client =>
                    new MedplayaCreatedClientEvent(
                        client.id.value,
                        client.name.value,
                        client.lastname.value,
                        client.username.value,
                        client.checkin.value,
                        client.checkout.value,
                        client.code.value,
                        client.room.value,
                        client.status?.value,
                        client.tags?.value,
                        client.otherTags?.value,
                        client.isActive.value,
                        client.amount?.value,
                        client.createdAt?.value,
                        client.updatedAt?.value,
                        client.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new MedplayaUpdatedClientsEvent(
                this.aggregateRoots.map(client =>
                    new MedplayaUpdatedClientEvent(
                        client.id.value,
                        client.name.value,
                        client.lastname.value,
                        client.username.value,
                        client.checkin.value,
                        client.checkout.value,
                        client.code.value,
                        client.room.value,
                        client.status?.value,
                        client.tags?.value,
                        client.otherTags?.value,
                        client.isActive.value,
                        client.amount?.value,
                        client.createdAt?.value,
                        client.updatedAt?.value,
                        client.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new MedplayaUpdatedAndIncrementedClientsEvent(
                this.aggregateRoots.map(client =>
                    new MedplayaUpdatedAndIncrementedClientEvent(
                        client.id.value,
                        client.name.value,
                        client.lastname.value,
                        client.username.value,
                        client.checkin.value,
                        client.checkout.value,
                        client.code.value,
                        client.room.value,
                        client.status?.value,
                        client.tags?.value,
                        client.otherTags?.value,
                        client.isActive.value,
                        client.amount?.value,
                        client.createdAt?.value,
                        client.updatedAt?.value,
                        client.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new MedplayaDeletedClientsEvent(
                this.aggregateRoots.map(client =>
                    new MedplayaDeletedClientEvent(
                        client.id.value,
                        client.name.value,
                        client.lastname.value,
                        client.username.value,
                        client.checkin.value,
                        client.checkout.value,
                        client.code.value,
                        client.room.value,
                        client.status?.value,
                        client.tags?.value,
                        client.otherTags?.value,
                        client.isActive.value,
                        client.amount?.value,
                        client.createdAt?.value,
                        client.updatedAt?.value,
                        client.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
