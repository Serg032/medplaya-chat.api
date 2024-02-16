import { MedplayaCreateMessageInput } from '@api/graphql';
import { MedplayaCreateMessageDto } from '@api/medplaya/message';
import { MedplayaCreateMessagesCommand } from '@app/medplaya/message';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaCreateMessagesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: MedplayaCreateMessageInput[] | MedplayaCreateMessageDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new MedplayaCreateMessagesCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
