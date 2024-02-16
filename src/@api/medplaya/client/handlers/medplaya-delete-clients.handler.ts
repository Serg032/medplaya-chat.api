import { MedplayaClient } from '@api/graphql';
import { MedplayaClientDto } from '@api/medplaya/client';
import { MedplayaDeleteClientsCommand, MedplayaGetClientsQuery } from '@app/medplaya/client';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaDeleteClientsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient[] | MedplayaClientDto[]>
    {
        const clients = await this.queryBus.ask(new MedplayaGetClientsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MedplayaDeleteClientsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return clients;
    }
}
