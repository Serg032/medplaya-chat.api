import { MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaCreateClientDto } from '@api/medplaya/client';
import { MedplayaCreateClientsCommand } from '@app/medplaya/client';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaCreateClientsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: MedplayaCreateClientInput[] | MedplayaCreateClientDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new MedplayaCreateClientsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
