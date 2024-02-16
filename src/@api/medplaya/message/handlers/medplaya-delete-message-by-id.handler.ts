import { MedplayaMessage } from '@api/graphql';
import { MedplayaMessageDto } from '@api/medplaya/message';
import { MedplayaDeleteMessageByIdCommand, MedplayaFindMessageByIdQuery } from '@app/medplaya/message';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaDeleteMessageByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        const message = await this.queryBus.ask(new MedplayaFindMessageByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MedplayaDeleteMessageByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return message;
    }
}
