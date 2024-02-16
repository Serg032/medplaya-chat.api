import { MedplayaCreateMessageInput } from '@api/graphql';
import { MedplayaCreateMessagesHandler } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaCreateMessagesResolver
{
    constructor(
        private readonly handler: MedplayaCreateMessagesHandler,
    ) {}

    @Mutation('medplayaCreateMessages')
    async main(
        @Args('payload') payload: MedplayaCreateMessageInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
