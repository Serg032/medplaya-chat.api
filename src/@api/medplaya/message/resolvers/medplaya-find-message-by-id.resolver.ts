import { MedplayaMessage } from '@api/graphql';
import { MedplayaFindMessageByIdHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaFindMessageByIdResolver
{
    constructor(
        private readonly handler: MedplayaFindMessageByIdHandler,
    ) {}

    @Query('medplayaFindMessageById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
