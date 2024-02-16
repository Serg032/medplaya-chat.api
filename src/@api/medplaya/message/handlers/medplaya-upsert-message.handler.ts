import { MedplayaMessage, MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaMessageDto, MedplayaUpdateMessageByIdDto } from '@api/medplaya/message';
import { MedplayaFindMessageByIdQuery, MedplayaUpsertMessageCommand } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpsertMessageHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateMessageByIdInput | MedplayaUpdateMessageByIdDto,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        await this.commandBus.dispatch(new MedplayaUpsertMessageCommand(
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
