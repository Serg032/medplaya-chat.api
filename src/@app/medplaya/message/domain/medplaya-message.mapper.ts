import { MedplayaClientMapper } from '@app/medplaya/client';
import { MedplayaMessage, MedplayaMessageResponse } from '@app/medplaya/message';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageCreatedAt,
    MedplayaMessageDeletedAt,
    MedplayaMessageId,
    MedplayaMessageQuestion,
    MedplayaMessageUpdatedAt,
} from '@app/medplaya/message/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class MedplayaMessageMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param message
     */
    mapModelToAggregate(message: LiteralObject, cQMetadata?: CQMetadata): MedplayaMessage
    {
        if (!message) return;

        return this.makeAggregate(message, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param messages
     */
    mapModelsToAggregates(messages: LiteralObject[], cQMetadata?: CQMetadata): MedplayaMessage[]
    {
        if (!Array.isArray(messages)) return;

        return messages.map(message => this.makeAggregate(message, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param message
     */
    mapAggregateToResponse(message: MedplayaMessage): MedplayaMessageResponse
    {
        return this.makeResponse(message);
    }

    /**
     * Map array of aggregates to array responses
     * @param messages
     */
    mapAggregatesToResponses(messages: MedplayaMessage[]): MedplayaMessageResponse[]
    {
        if (!Array.isArray(messages)) return;

        return messages.map(message => this.makeResponse(message));
    }

    private makeAggregate(message: LiteralObject, cQMetadata?: CQMetadata): MedplayaMessage
    {
        return MedplayaMessage.register(
            new MedplayaMessageId(message.id, { undefinable: true }),
            new MedplayaMessageQuestion(message.question, { undefinable: true }),
            new MedplayaMessageChatResponse(message.chatResponse, { undefinable: true }),
            new MedplayaMessageClientId(message.clientId, { undefinable: true }),
            new MedplayaMessageCreatedAt(message.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaMessageUpdatedAt(message.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaMessageDeletedAt(message.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new MedplayaClientMapper({ eagerLoading: true }).mapModelToAggregate(message.client, cQMetadata) : undefined,
        );
    }

    private makeResponse(message: MedplayaMessage): MedplayaMessageResponse
    {
        if (!message) return;

        return new MedplayaMessageResponse(
            message.id.value,
            message.question.value,
            message.chatResponse.value,
            message.clientId.value,
            message.createdAt.value,
            message.updatedAt.value,
            message.deletedAt.value,
            this.options.eagerLoading ? new MedplayaClientMapper({ eagerLoading: true }).mapAggregateToResponse(message.client) : undefined,
        );
    }
}
