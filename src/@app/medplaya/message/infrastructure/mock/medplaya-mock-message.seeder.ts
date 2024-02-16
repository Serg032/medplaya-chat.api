import { MedplayaMessage, medplayaMockMessageData } from '@app/medplaya/message';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageCreatedAt,
    MedplayaMessageDeletedAt,
    MedplayaMessageId,
    MedplayaMessageQuestion,
    MedplayaMessageUpdatedAt,
} from '@app/medplaya/message/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class MedplayaMockMessageSeeder extends MockSeeder<MedplayaMessage>
{
    public collectionSource: MedplayaMessage[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const message of _.orderBy(medplayaMockMessageData, ['id']))
        {
            this.collectionSource.push(
                MedplayaMessage.register(
                    new MedplayaMessageId(message.id),
                    new MedplayaMessageQuestion(message.question),
                    new MedplayaMessageChatResponse(message.chatResponse),
                    new MedplayaMessageClientId(message.clientId),
                    new MedplayaMessageCreatedAt({ currentTimestamp: true }),
                    new MedplayaMessageUpdatedAt({ currentTimestamp: true }),
                    new MedplayaMessageDeletedAt(null),
                ),
            );
        }
    }
}
