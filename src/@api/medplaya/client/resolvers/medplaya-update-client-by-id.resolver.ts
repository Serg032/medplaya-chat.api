import { MedplayaClient, MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaUpdateClientByIdHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpdateClientByIdResolver
{
    constructor(
        private readonly handler: MedplayaUpdateClientByIdHandler,
    ) {}

    @Mutation('medplayaUpdateClientById')
    async main(
        @Args('payload') payload: MedplayaUpdateClientByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
