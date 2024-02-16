/* eslint-disable key-spacing */
import { MedplayaUpsertMessageCommand } from '@app/medplaya/message';
import { MedplayaUpsertMessageService } from '@app/medplaya/message/application/upsert/medplaya-upsert-message.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MedplayaUpsertMessageCommand)
export class MedplayaUpsertMessageCommandHandler implements ICommandHandler<MedplayaUpsertMessageCommand>
{
    constructor(
        private readonly upsertMessageService: MedplayaUpsertMessageService,
    ) {}

    async execute(command: MedplayaUpsertMessageCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertMessageService.main(
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
