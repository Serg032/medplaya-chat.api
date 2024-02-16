import { MedplayaUpdatedAndIncrementedMessagesEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedAndIncrementedMessagesEvent)
export class MedplayaUpdatedAndIncrementedMessagesEventHandler implements IEventHandler<MedplayaUpdatedAndIncrementedMessagesEvent>
{
    handle(event: MedplayaUpdatedAndIncrementedMessagesEvent): void
    {
        // console.log('MedplayaUpdatedAndIncrementedMessagesEvent: ', event);
    }
}
