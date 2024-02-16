import { MedplayaClient, MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaClientDto, MedplayaUpdateClientByIdDto } from '@api/medplaya/client';
import { MedplayaFindClientByIdQuery, MedplayaUpsertClientCommand } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaUpsertClientHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaUpdateClientByIdInput | MedplayaUpdateClientByIdDto,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        await this.commandBus.dispatch(new MedplayaUpsertClientCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new MedplayaFindClientByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
