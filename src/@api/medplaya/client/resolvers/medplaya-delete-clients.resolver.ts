import { MedplayaClient } from '@api/graphql';
import { MedplayaDeleteClientsHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaDeleteClientsResolver
{
    constructor(
        private readonly handler: MedplayaDeleteClientsHandler,
    ) {}

    @Mutation('medplayaDeleteClients')
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
