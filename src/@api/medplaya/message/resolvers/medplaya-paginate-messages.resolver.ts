import { Pagination } from '@api/graphql';
import { MedplayaPaginateMessagesHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaPaginateMessagesResolver
{
    constructor(
        private readonly handler: MedplayaPaginateMessagesHandler,
    ) {}

    @Query('medplayaPaginateMessages')
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
