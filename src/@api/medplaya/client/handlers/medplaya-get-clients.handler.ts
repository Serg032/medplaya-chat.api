import { MedplayaClient } from '@api/graphql';
import { MedplayaClientDto } from '@api/medplaya/client';
import { MedplayaGetClientsQuery } from '@app/medplaya/client';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaGetClientsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient[] | MedplayaClientDto[]>
    {
        return await this.queryBus.ask(new MedplayaGetClientsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
