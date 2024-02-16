/* eslint-disable key-spacing */
import { MedplayaUpdateClientsCommand } from '@app/medplaya/client';
import { MedplayaUpdateClientsService } from '@app/medplaya/client/application/update/medplaya-update-clients.service';
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

@CommandHandler(MedplayaUpdateClientsCommand)
export class MedplayaUpdateClientsCommandHandler implements ICommandHandler<MedplayaUpdateClientsCommand>
{
    constructor(
        private readonly updateClientsService: MedplayaUpdateClientsService,
    ) {}

    async execute(command: MedplayaUpdateClientsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateClientsService.main(
            {
                id: new MedplayaClientId(command.payload.id, { undefinable: true }),
                name: new MedplayaClientName(command.payload.name, { undefinable: true }),
                lastname: new MedplayaClientLastname(command.payload.lastname, { undefinable: true }),
                username: new MedplayaClientUsername(command.payload.username, { undefinable: true }),
                checkin: new MedplayaClientCheckin(command.payload.checkin, { undefinable: true }, { removeTimezone: command.cQMetadata.timezone }),
                checkout: new MedplayaClientCheckout(command.payload.checkout, { undefinable: true }, { removeTimezone: command.cQMetadata.timezone }),
                code: new MedplayaClientCode(command.payload.code, { undefinable: true }),
                room: new MedplayaClientRoom(command.payload.room, { undefinable: true }),
                status: new MedplayaClientStatus(command.payload.status),
                tags: new MedplayaClientTags(command.payload.tags),
                otherTags: new MedplayaClientOtherTags(command.payload.otherTags),
                isActive: new MedplayaClientIsActive(command.payload.isActive, { undefinable: true }),
                amount: new MedplayaClientAmount(command.payload.amount),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
