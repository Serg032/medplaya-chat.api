import { MedplayaClient, MedplayaUpdateClientsInput } from '@api/graphql';
import { MedplayaUpdateClientsHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpdateClientsResolver
{
    constructor(
        private readonly handler: MedplayaUpdateClientsHandler,
    ) {}

    @Mutation('medplayaUpdateClients')
    async main(
        @Args('payload') payload: MedplayaUpdateClientsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
