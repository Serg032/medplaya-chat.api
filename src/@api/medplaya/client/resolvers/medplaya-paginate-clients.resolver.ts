import { Pagination } from '@api/graphql';
import { MedplayaPaginateClientsHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaPaginateClientsResolver
{
    constructor(
        private readonly handler: MedplayaPaginateClientsHandler,
    ) {}

    @Query('medplayaPaginateClients')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
