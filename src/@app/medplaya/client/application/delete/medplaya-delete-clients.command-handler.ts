import { MedplayaDeleteClientsCommand } from '@app/medplaya/client';
import { MedplayaDeleteClientsService } from '@app/medplaya/client/application/delete/medplaya-delete-clients.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaDeleteClientsCommand)
export class MedplayaDeleteClientsCommandHandler implements ICommandHandler<MedplayaDeleteClientsCommand>
{
    constructor(
        private readonly deleteClientsService: MedplayaDeleteClientsService,
    ) {}

    async execute(command: MedplayaDeleteClientsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteClientsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
