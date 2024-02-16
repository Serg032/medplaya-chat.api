import { MedplayaUpdatedMessagesEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedMessagesEvent)
export class MedplayaUpdatedMessagesEventHandler implements IEventHandler<MedplayaUpdatedMessagesEvent>
{
    handle(event: MedplayaUpdatedMessagesEvent): void
    {
        // console.log('MedplayaUpdatedMessagesEvent: ', event);
    }
}
