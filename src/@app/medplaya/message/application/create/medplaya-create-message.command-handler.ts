/* eslint-disable key-spacing */
import { MedplayaCreateMessageCommand } from '@app/medplaya/message';
import { MedplayaCreateMessageService } from '@app/medplaya/message/application/create/medplaya-create-message.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaCreateMessageCommand)
export class MedplayaCreateMessageCommandHandler implements ICommandHandler<MedplayaCreateMessageCommand>
{
    constructor(
        private readonly createMessageService: MedplayaCreateMessageService,
    ) {}

    async execute(command: MedplayaCreateMessageCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createMessageService.main(
            {
                id: new MedplayaMessageId(command.payload.id),
                question: new MedplayaMessageQuestion(command.payload.question),
                chatResponse: new MedplayaMessageChatResponse(command.payload.chatResponse),
                clientId: new MedplayaMessageClientId(command.payload.clientId),
            },
            command.cQMetadata,
        );
    }
}
