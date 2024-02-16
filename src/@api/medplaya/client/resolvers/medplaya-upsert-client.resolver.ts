import { MedplayaClient, MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaUpsertClientHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpsertClientResolver
{
    constructor(
        private readonly handler: MedplayaUpsertClientHandler,
    ) {}

    @Mutation('medplayaUpsertClient')
    async main(
        @Args('payload') payload: MedplayaUpdateClientByIdInput,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
