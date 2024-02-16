import { MedplayaMessage } from '@api/graphql';
import { MedplayaMessageDto } from '@api/medplaya/message';
import { MedplayaDeleteMessagesCommand, MedplayaGetMessagesQuery } from '@app/medplaya/message';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaDeleteMessagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage[] | MedplayaMessageDto[]>
    {
        const messages = await this.queryBus.ask(new MedplayaGetMessagesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MedplayaDeleteMessagesCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return messages;
    }
}
