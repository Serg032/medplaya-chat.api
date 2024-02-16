import { MedplayaCreateMessageInput, MedplayaMessage } from '@api/graphql';
import { MedplayaCreateMessageDto, MedplayaMessageDto } from '@api/medplaya/message';
import { MedplayaCreateMessageCommand, MedplayaFindMessageByIdQuery } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaCreateMessageHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaCreateMessageInput | MedplayaCreateMessageDto,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        await this.commandBus.dispatch(new MedplayaCreateMessageCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaFindMessageByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
