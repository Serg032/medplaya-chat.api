import { MedplayaClient, MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaCreateClientHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaCreateClientResolver
{
    constructor(
        private readonly handler: MedplayaCreateClientHandler,
    ) {}

    @Mutation('medplayaCreateClient')
    async main(
        @Args('payload') payload: MedplayaCreateClientInput,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
