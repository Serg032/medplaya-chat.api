import { MedplayaClient, MedplayaUpdateClientsInput } from '@api/graphql';
import { MedplayaClientDto, MedplayaUpdateClientsDto } from '@api/medplaya/client';
import { MedplayaGetClientsQuery, MedplayaUpdateClientsCommand } from '@app/medplaya/client';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpdateClientsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateClientsInput | MedplayaUpdateClientsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        await this.commandBus.dispatch(new MedplayaUpdateClientsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaGetClientsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
