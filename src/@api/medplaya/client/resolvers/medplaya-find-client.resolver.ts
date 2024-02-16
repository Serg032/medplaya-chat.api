import { MedplayaClient } from '@api/graphql';
import { MedplayaFindClientHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaFindClientResolver
{
    constructor(
        private readonly handler: MedplayaFindClientHandler,
    ) {}

    @Query('medplayaFindClient')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
