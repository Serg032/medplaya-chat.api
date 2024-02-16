import { Pagination } from '@api/graphql';
import { MedplayaPaginateClientsQuery } from '@app/medplaya/client';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaPaginateClientsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new MedplayaPaginateClientsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
