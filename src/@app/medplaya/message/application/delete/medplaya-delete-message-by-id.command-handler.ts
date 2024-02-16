import { MedplayaDeleteMessageByIdCommand } from '@app/medplaya/message';
import { MedplayaDeleteMessageByIdService } from '@app/medplaya/message/application/delete/medplaya-delete-message-by-id.service';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaDeleteMessageByIdCommand)
export class MedplayaDeleteMessageByIdCommandHandler implements ICommandHandler<MedplayaDeleteMessageByIdCommand>
{
    constructor(
        private readonly deleteMessageByIdService: MedplayaDeleteMessageByIdService,
    ) {}

    async execute(command: MedplayaDeleteMessageByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteMessageByIdService.main(
            new MedplayaMessageId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
