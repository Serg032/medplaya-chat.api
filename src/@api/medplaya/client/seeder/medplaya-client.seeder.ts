import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { MedplayaCreateClientsCommand } from '@app/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';

@Injectable()
export class MedplayaClientSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new MedplayaCreateClientsCommand(
            medplayaMockClientData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
