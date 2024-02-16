import { MedplayaDeleteClientByIdCommand } from '@app/medplaya/client';
import { MedplayaDeleteClientByIdService } from '@app/medplaya/client/application/delete/medplaya-delete-client-by-id.service';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaDeleteClientByIdCommand)
export class MedplayaDeleteClientByIdCommandHandler implements ICommandHandler<MedplayaDeleteClientByIdCommand>
{
    constructor(
        private readonly deleteClientByIdService: MedplayaDeleteClientByIdService,
    ) {}

    async execute(command: MedplayaDeleteClientByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteClientByIdService.main(
            new MedplayaClientId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
