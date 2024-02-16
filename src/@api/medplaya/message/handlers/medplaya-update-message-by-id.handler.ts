import { MedplayaMessage, MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaMessageDto, MedplayaUpdateMessageByIdDto } from '@api/medplaya/message';
import { MedplayaFindMessageByIdQuery, MedplayaUpdateMessageByIdCommand } from '@app/medplaya/message';
import { diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpdateMessageByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateMessageByIdInput | MedplayaUpdateMessageByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        const message = await this.queryBus.ask(new MedplayaFindMessageByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, message);

        await this.commandBus.dispatch(new MedplayaUpdateMessageByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaFindMessageByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
