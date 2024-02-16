import { MedplayaMessage, MedplayaUpdateMessagesInput } from '@api/graphql';
import { MedplayaUpdateMessagesHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaUpdateMessagesResolver
{
    constructor(
        private readonly handler: MedplayaUpdateMessagesHandler,
    ) {}

    @Mutation('medplayaUpdateMessages')
    async main(
        @Args('payload') payload: MedplayaUpdateMessagesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
