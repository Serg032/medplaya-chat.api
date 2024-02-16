import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { MedplayaCreateMessagesCommand } from '@app/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';

@Injectable()
export class MedplayaMessageSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new MedplayaCreateMessagesCommand(
            medplayaMockMessageData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
