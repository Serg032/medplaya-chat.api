/* eslint-disable key-spacing */
import { MedplayaCreateMessagesCommand } from '@app/medplaya/message';
import { MedplayaCreateMessagesService } from '@app/medplaya/message/application/create/medplaya-create-messages.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaCreateMessagesCommand)
export class MedplayaCreateMessagesCommandHandler implements ICommandHandler<MedplayaCreateMessagesCommand>
{
    constructor(
        private readonly createMessagesService: MedplayaCreateMessagesService,
    ) {}

    async execute(command: MedplayaCreateMessagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createMessagesService.main(
            command.payload
                .map(message =>
                {
                    return {
                        id: new MedplayaMessageId(message.id),
                        question: new MedplayaMessageQuestion(message.question),
                        chatResponse: new MedplayaMessageChatResponse(message.chatResponse),
                        clientId: new MedplayaMessageClientId(message.clientId),
                    };
                }),
            command.cQMetadata,
        );
    }
}
