import { MedplayaIMessageRepository, MedplayaMessage, medplayaMockMessageData } from '@app/medplaya/message';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageCreatedAt,
    MedplayaMessageDeletedAt,
    MedplayaMessageId,
    MedplayaMessageQuestion,
    MedplayaMessageUpdatedAt,
} from '@app/medplaya/message/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaMockMessageRepository extends MockRepository<MedplayaMessage> implements MedplayaIMessageRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'MedplayaMessage';
    public collectionSource: MedplayaMessage[];

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

        for (const itemCollection of <any[]>medplayaMockMessageData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(MedplayaMessage.register(
                new MedplayaMessageId(itemCollection.id),
                new MedplayaMessageQuestion(itemCollection.question),
                new MedplayaMessageChatResponse(itemCollection.chatResponse),
                new MedplayaMessageClientId(itemCollection.clientId),
                new MedplayaMessageCreatedAt(itemCollection.createdAt),
                new MedplayaMessageUpdatedAt(itemCollection.updatedAt),
                new MedplayaMessageDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
