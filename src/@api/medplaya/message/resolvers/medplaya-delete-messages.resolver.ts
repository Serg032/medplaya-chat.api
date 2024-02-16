import { MedplayaMessage } from '@api/graphql';
import { MedplayaDeleteMessagesHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MedplayaDeleteMessagesResolver
{
    constructor(
        private readonly handler: MedplayaDeleteMessagesHandler,
    ) {}

    @Mutation('medplayaDeleteMessages')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<MedplayaMessage[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
