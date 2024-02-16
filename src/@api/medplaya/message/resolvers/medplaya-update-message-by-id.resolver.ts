import { MedplayaMessage, MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaUpdateMessageByIdHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpdateMessageByIdResolver
{
    constructor(
        private readonly handler: MedplayaUpdateMessageByIdHandler,
    ) {}

    @Mutation('medplayaUpdateMessageById')
    async main(
        @Args('payload') payload: MedplayaUpdateMessageByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
