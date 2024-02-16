import { MedplayaCreatedMessageEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaCreatedMessageEvent)
export class MedplayaCreatedMessageEventHandler implements IEventHandler<MedplayaCreatedMessageEvent>
{
    handle(event: MedplayaCreatedMessageEvent): void
    {
        // console.log('MedplayaCreatedMessageEvent: ', event);
    }
}
