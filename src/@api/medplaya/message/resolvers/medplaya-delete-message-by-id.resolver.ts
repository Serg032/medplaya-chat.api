import { MedplayaMessage } from '@api/graphql';
import { MedplayaDeleteMessageByIdHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaDeleteMessageByIdResolver
{
    constructor(
        private readonly handler: MedplayaDeleteMessageByIdHandler,
    ) {}

    @Mutation('medplayaDeleteMessageById')
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
