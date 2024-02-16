import { MedplayaClient, medplayaMockClientData } from '@app/medplaya/client';
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class MedplayaMockClientSeeder extends MockSeeder<MedplayaClient>
{
    public collectionSource: MedplayaClient[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const client of _.orderBy(medplayaMockClientData, ['id']))
        {
            this.collectionSource.push(
                MedplayaClient.register(
                    new MedplayaClientId(client.id),
                    new MedplayaClientName(client.name),
                    new MedplayaClientLastname(client.lastname),
                    new MedplayaClientUsername(client.username),
                    new MedplayaClientCheckin(client.checkin),
                    new MedplayaClientCheckout(client.checkout),
                    new MedplayaClientCode(client.code),
                    new MedplayaClientRoom(client.room),
                    new MedplayaClientStatus(client.status),
                    new MedplayaClientTags(client.tags),
                    new MedplayaClientOtherTags(client.otherTags),
                    new MedplayaClientIsActive(client.isActive),
                    new MedplayaClientAmount(client.amount),
                    new MedplayaClientCreatedAt({ currentTimestamp: true }),
                    new MedplayaClientUpdatedAt({ currentTimestamp: true }),
                    new MedplayaClientDeletedAt(null),
                ),
            );
        }
    }
}
