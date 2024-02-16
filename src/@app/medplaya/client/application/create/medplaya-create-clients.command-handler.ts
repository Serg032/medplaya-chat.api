/* eslint-disable key-spacing */
import { MedplayaCreateClientsCommand } from '@app/medplaya/client';
import { MedplayaCreateClientsService } from '@app/medplaya/client/application/create/medplaya-create-clients.service';
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

@CommandHandler(MedplayaCreateClientsCommand)
export class MedplayaCreateClientsCommandHandler implements ICommandHandler<MedplayaCreateClientsCommand>
{
    constructor(
        private readonly createClientsService: MedplayaCreateClientsService,
    ) {}

    async execute(command: MedplayaCreateClientsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createClientsService.main(
            command.payload
                .map(client =>
                {
                    return {
                        id: new MedplayaClientId(client.id),
                        name: new MedplayaClientName(client.name),
                        lastname: new MedplayaClientLastname(client.lastname),
                        username: new MedplayaClientUsername(client.username),
                        checkin: new MedplayaClientCheckin(client.checkin, {}, { removeTimezone: command.cQMetadata.timezone }),
                        checkout: new MedplayaClientCheckout(client.checkout, {}, { removeTimezone: command.cQMetadata.timezone }),
                        code: new MedplayaClientCode(client.code),
                        room: new MedplayaClientRoom(client.room),
                        status: new MedplayaClientStatus(client.status),
                        tags: new MedplayaClientTags(client.tags),
                        otherTags: new MedplayaClientOtherTags(client.otherTags),
                        isActive: new MedplayaClientIsActive(client.isActive),
                        amount: new MedplayaClientAmount(client.amount),
                    };
                }),
            command.cQMetadata,
        );
    }
}
