import { MedplayaClient, MedplayaClientResponse } from '@app/medplaya/client';
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
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class MedplayaClientMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param client
     */
    mapModelToAggregate(client: LiteralObject, cQMetadata?: CQMetadata): MedplayaClient
    {
        if (!client) return;

        return this.makeAggregate(client, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param clients
     */
    mapModelsToAggregates(clients: LiteralObject[], cQMetadata?: CQMetadata): MedplayaClient[]
    {
        if (!Array.isArray(clients)) return;

        return clients.map(client => this.makeAggregate(client, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param client
     */
    mapAggregateToResponse(client: MedplayaClient): MedplayaClientResponse
    {
        return this.makeResponse(client);
    }

    /**
     * Map array of aggregates to array responses
     * @param clients
     */
    mapAggregatesToResponses(clients: MedplayaClient[]): MedplayaClientResponse[]
    {
        if (!Array.isArray(clients)) return;

        return clients.map(client => this.makeResponse(client));
    }

    private makeAggregate(client: LiteralObject, cQMetadata?: CQMetadata): MedplayaClient
    {
        return MedplayaClient.register(
            new MedplayaClientId(client.id, { undefinable: true }),
            new MedplayaClientName(client.name, { undefinable: true }),
            new MedplayaClientLastname(client.lastname, { undefinable: true }),
            new MedplayaClientUsername(client.username, { undefinable: true }),
            new MedplayaClientCheckin(client.checkin, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaClientCheckout(client.checkout, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaClientCode(client.code, { undefinable: true }),
            new MedplayaClientRoom(client.room, { undefinable: true }),
            new MedplayaClientStatus(client.status, { undefinable: true }),
            new MedplayaClientTags(client.tags, { undefinable: true }),
            new MedplayaClientOtherTags(client.otherTags, { undefinable: true }),
            new MedplayaClientIsActive(client.isActive, { undefinable: true }),
            new MedplayaClientAmount(client.amount, { undefinable: true }),
            new MedplayaClientCreatedAt(client.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaClientUpdatedAt(client.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MedplayaClientDeletedAt(client.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(client: MedplayaClient): MedplayaClientResponse
    {
        if (!client) return;

        return new MedplayaClientResponse(
            client.id.value,
            client.name.value,
            client.lastname.value,
            client.username.value,
            client.checkin.value,
            client.checkout.value,
            client.code.value,
            client.room.value,
            client.status.value,
            client.tags.value,
            client.otherTags.value,
            client.isActive.value,
            client.amount.value,
            client.createdAt.value,
            client.updatedAt.value,
            client.deletedAt.value,
        );
    }
}
