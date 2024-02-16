/* eslint-disable key-spacing */
import { MedplayaUpdateMessageByIdCommand } from '@app/medplaya/message';
import { MedplayaUpdateMessageByIdService } from '@app/medplaya/message/application/update/medplaya-update-message-by-id.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaUpdateMessageByIdCommand)
export class MedplayaUpdateMessageByIdCommandHandler implements ICommandHandler<MedplayaUpdateMessageByIdCommand>
{
    constructor(
        private readonly updateMessageByIdService: MedplayaUpdateMessageByIdService,
    ) {}

    async execute(command: MedplayaUpdateMessageByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateMessageByIdService.main(
            {
                id: new MedplayaMessageId(command.payload.id),
                question: new MedplayaMessageQuestion(command.payload.question, { undefinable: true }),
                chatResponse: new MedplayaMessageChatResponse(command.payload.chatResponse, { undefinable: true }),
                clientId: new MedplayaMessageClientId(command.payload.clientId, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
