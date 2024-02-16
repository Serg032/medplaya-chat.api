import { MedplayaClient, MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaClientDto, MedplayaUpdateClientByIdDto } from '@api/medplaya/client';
import { MedplayaFindClientByIdQuery, MedplayaUpdateClientByIdCommand } from '@app/medplaya/client';
import { diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpdateClientByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateClientByIdInput | MedplayaUpdateClientByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        const client = await this.queryBus.ask(new MedplayaFindClientByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, client);

        await this.commandBus.dispatch(new MedplayaUpdateClientByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaFindClientByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
