import { MedplayaClient, MedplayaIClientRepository, medplayaMockClientData } from '@app/medplaya/client';
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaMockClientRepository extends MockRepository<MedplayaClient> implements MedplayaIClientRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'MedplayaClient';
    public collectionSource: MedplayaClient[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>medplayaMockClientData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(MedplayaClient.register(
                new MedplayaClientId(itemCollection.id),
                new MedplayaClientName(itemCollection.name),
                new MedplayaClientLastname(itemCollection.lastname),
                new MedplayaClientUsername(itemCollection.username),
                new MedplayaClientCheckin(itemCollection.checkin),
                new MedplayaClientCheckout(itemCollection.checkout),
                new MedplayaClientCode(itemCollection.code),
                new MedplayaClientRoom(itemCollection.room),
                new MedplayaClientStatus(itemCollection.status),
                new MedplayaClientTags(itemCollection.tags),
                new MedplayaClientOtherTags(itemCollection.otherTags),
                new MedplayaClientIsActive(itemCollection.isActive),
                new MedplayaClientAmount(itemCollection.amount),
                new MedplayaClientCreatedAt(itemCollection.createdAt),
                new MedplayaClientUpdatedAt(itemCollection.updatedAt),
                new MedplayaClientDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
