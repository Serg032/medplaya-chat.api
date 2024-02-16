import { MedplayaClient } from '@api/graphql';
import { MedplayaFindClientByIdHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaFindClientByIdResolver
{
    constructor(
        private readonly handler: MedplayaFindClientByIdHandler,
    ) {}

    @Query('medplayaFindClientById')
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
