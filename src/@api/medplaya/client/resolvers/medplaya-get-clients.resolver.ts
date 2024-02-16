import { MedplayaClient } from '@api/graphql';
import { MedplayaGetClientsHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaGetClientsResolver
{
    constructor(
        private readonly handler: MedplayaGetClientsHandler,
    ) {}

    @Query('medplayaGetClients')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
