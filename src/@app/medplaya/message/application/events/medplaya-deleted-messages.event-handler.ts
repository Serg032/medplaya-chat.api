import { MedplayaDeletedMessagesEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaDeletedMessagesEvent)
export class MedplayaDeletedMessagesEventHandler implements IEventHandler<MedplayaDeletedMessagesEvent>
{
    handle(event: MedplayaDeletedMessagesEvent): void
    {
        // console.log('DeletedMessagesEvent: ', event);
    }
}
