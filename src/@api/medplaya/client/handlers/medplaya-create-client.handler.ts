import { MedplayaClient, MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaClientDto, MedplayaCreateClientDto } from '@api/medplaya/client';
import { MedplayaCreateClientCommand, MedplayaFindClientByIdQuery } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaCreateClientHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: MedplayaCreateClientInput | MedplayaCreateClientDto,
        timezone?: string,
    ): Promise<MedplayaClient | MedplayaClientDto>
    {
        await this.commandBus.dispatch(new MedplayaCreateClientCommand(
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
