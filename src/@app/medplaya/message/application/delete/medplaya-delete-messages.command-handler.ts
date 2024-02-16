import { MedplayaDeleteMessagesCommand } from '@app/medplaya/message';
import { MedplayaDeleteMessagesService } from '@app/medplaya/message/application/delete/medplaya-delete-messages.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaDeleteMessagesCommand)
export class MedplayaDeleteMessagesCommandHandler implements ICommandHandler<MedplayaDeleteMessagesCommand>
{
    constructor(
        private readonly deleteMessagesService: MedplayaDeleteMessagesService,
    ) {}

    async execute(command: MedplayaDeleteMessagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteMessagesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
