/* eslint-disable key-spacing */
import { MedplayaUpdateAndIncrementMessagesCommand } from '@app/medplaya/message';
import { MedplayaUpdateAndIncrementMessagesService } from '@app/medplaya/message/application/update/medplaya-update-and-increment-messages.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaUpdateAndIncrementMessagesCommand)
export class MedplayaUpdateAndIncrementMessagesCommandHandler implements ICommandHandler<MedplayaUpdateAndIncrementMessagesCommand>
{
    constructor(
        private readonly updateMessagesService: MedplayaUpdateAndIncrementMessagesService,
    ) {}

    async execute(command: MedplayaUpdateAndIncrementMessagesCommand): Promise<void>
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
