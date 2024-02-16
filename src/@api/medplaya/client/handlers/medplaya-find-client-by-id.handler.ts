import { MedplayaClient } from '@api/graphql';
import { MedplayaClientDto } from '@api/medplaya/client';
import { MedplayaFindClientByIdQuery } from '@app/medplaya/client';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaFindClientByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        return await this.queryBus.ask(new MedplayaFindClientByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
