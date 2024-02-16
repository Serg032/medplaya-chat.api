/* eslint-disable key-spacing */
import { MedplayaUpsertClientCommand } from '@app/medplaya/client';
import { MedplayaUpsertClientService } from '@app/medplaya/client/application/upsert/medplaya-upsert-client.service';
import {
    MedplayaClientAmount,
    MedplayaClientCheckin,
    MedplayaClientCheckout,
    MedplayaClientCode,
    MedplayaClientId,
    MedplayaClientIsActive,
    MedplayaClientLastname,
    MedplayaClientName,
    MedplayaClientOtherTags,
    MedplayaClientRoom,
    MedplayaClientStatus,
    MedplayaClientTags,
    MedplayaClientUsername,
} from '@app/medplaya/client/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaUpsertClientCommand)
export class MedplayaUpsertClientCommandHandler implements ICommandHandler<MedplayaUpsertClientCommand>
{
    constructor(
        private readonly upsertClientService: MedplayaUpsertClientService,
    ) {}

    async execute(command: MedplayaUpsertClientCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertClientService.main(
            {
                id: new MedplayaClientId(command.payload.id),
                name: new MedplayaClientName(command.payload.name),
                lastname: new MedplayaClientLastname(command.payload.lastname),
                username: new MedplayaClientUsername(command.payload.username),
                checkin: new MedplayaClientCheckin(command.payload.checkin, {}, { removeTimezone: command.cQMetadata.timezone }),
                checkout: new MedplayaClientCheckout(command.payload.checkout, {}, { removeTimezone: command.cQMetadata.timezone }),
                code: new MedplayaClientCode(command.payload.code),
                room: new MedplayaClientRoom(command.payload.room),
                status: new MedplayaClientStatus(command.payload.status),
                tags: new MedplayaClientTags(command.payload.tags),
                otherTags: new MedplayaClientOtherTags(command.payload.otherTags),
                isActive: new MedplayaClientIsActive(command.payload.isActive),
                amount: new MedplayaClientAmount(command.payload.amount),
            },
            command.cQMetadata,
        );
    }
}
