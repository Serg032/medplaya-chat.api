import { MedplayaClient } from '@api/graphql';
import { MedplayaDeleteClientByIdHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaDeleteClientByIdResolver
{
    constructor(
        private readonly handler: MedplayaDeleteClientByIdHandler,
    ) {}

    @Mutation('medplayaDeleteClientById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaClient>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
