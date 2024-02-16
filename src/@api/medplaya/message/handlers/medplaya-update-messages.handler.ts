import { MedplayaMessage, MedplayaUpdateMessagesInput } from '@api/graphql';
import { MedplayaMessageDto, MedplayaUpdateMessagesDto } from '@api/medplaya/message';
import { MedplayaGetMessagesQuery, MedplayaUpdateMessagesCommand } from '@app/medplaya/message';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpdateMessagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateMessagesInput | MedplayaUpdateMessagesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        await this.commandBus.dispatch(new MedplayaUpdateMessagesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaGetMessagesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
