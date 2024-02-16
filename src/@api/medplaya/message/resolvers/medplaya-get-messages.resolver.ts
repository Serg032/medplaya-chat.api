import { MedplayaMessage } from '@api/graphql';
import { MedplayaGetMessagesHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaGetMessagesResolver
{
    constructor(
        private readonly handler: MedplayaGetMessagesHandler,
    ) {}

    @Query('medplayaGetMessages')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
