import { MedplayaClient } from '@api/graphql';
import { MedplayaClientDto } from '@api/medplaya/client';
import { MedplayaDeleteClientByIdCommand, MedplayaFindClientByIdQuery } from '@app/medplaya/client';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaDeleteClientByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        const client = await this.queryBus.ask(new MedplayaFindClientByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MedplayaDeleteClientByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return client;
    }
}
