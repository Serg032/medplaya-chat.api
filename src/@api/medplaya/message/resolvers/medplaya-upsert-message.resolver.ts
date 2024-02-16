import { MedplayaMessage, MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaUpsertMessageHandler } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpsertMessageResolver
{
    constructor(
        private readonly handler: MedplayaUpsertMessageHandler,
    ) {}

    @Mutation('medplayaUpsertMessage')
    async main(
        @Args('payload') payload: MedplayaUpdateMessageByIdInput,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
