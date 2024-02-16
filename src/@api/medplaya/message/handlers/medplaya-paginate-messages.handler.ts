import { Pagination } from '@api/graphql';
import { MedplayaPaginateMessagesQuery } from '@app/medplaya/message';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaPaginateMessagesHandler
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
        return await this.queryBus.ask(new MedplayaPaginateMessagesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
