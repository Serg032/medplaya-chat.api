import { MedplayaMessage } from '@api/graphql';
import { MedplayaFindMessageHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaFindMessageResolver
{
    constructor(
        private readonly handler: MedplayaFindMessageHandler,
    ) {}

    @Query('medplayaFindMessage')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
