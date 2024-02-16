import { MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaCreateClientsHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaCreateClientsResolver
{
    constructor(
        private readonly handler: MedplayaCreateClientsHandler,
    ) {}

    @Mutation('medplayaCreateClients')
    async main(
        @Args('payload') payload: MedplayaCreateClientInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
