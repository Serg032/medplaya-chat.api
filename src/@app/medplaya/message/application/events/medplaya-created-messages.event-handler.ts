import { MedplayaCreatedMessagesEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaCreatedMessagesEvent)
export class MedplayaCreatedMessagesEventHandler implements IEventHandler<MedplayaCreatedMessagesEvent>
{
    handle(event: MedplayaCreatedMessagesEvent): void
    {
        // console.log('CreatedMessagesEvent: ', event);
    }
}
