/* eslint-disable key-spacing */
import { MedplayaUpdateMessagesCommand } from '@app/medplaya/message';
import { MedplayaUpdateMessagesService } from '@app/medplaya/message/application/update/medplaya-update-messages.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaUpdateMessagesCommand)
export class MedplayaUpdateMessagesCommandHandler implements ICommandHandler<MedplayaUpdateMessagesCommand>
{
    constructor(
        private readonly updateMessagesService: MedplayaUpdateMessagesService,
    ) {}

    async execute(command: MedplayaUpdateMessagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateMessagesService.main(
            {
                id: new MedplayaMessageId(command.payload.id, { undefinable: true }),
                question: new MedplayaMessageQuestion(command.payload.question, { undefinable: true }),
                chatResponse: new MedplayaMessageChatResponse(command.payload.chatResponse, { undefinable: true }),
                clientId: new MedplayaMessageClientId(command.payload.clientId, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
