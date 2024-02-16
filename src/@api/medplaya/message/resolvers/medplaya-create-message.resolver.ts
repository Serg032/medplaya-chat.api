import { MedplayaCreateMessageInput, MedplayaMessage } from '@api/graphql';
import { MedplayaCreateMessageHandler } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaCreateMessageResolver
{
    constructor(
        private readonly handler: MedplayaCreateMessageHandler,
    ) {}

    @Mutation('medplayaCreateMessage')
    async main(
        @Args('payload') payload: MedplayaCreateMessageInput,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
