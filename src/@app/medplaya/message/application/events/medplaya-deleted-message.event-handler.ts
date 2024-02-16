import { MedplayaDeletedMessageEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaDeletedMessageEvent)
export class MedplayaDeletedMessageEventHandler implements IEventHandler<MedplayaDeletedMessageEvent>
{
    handle(event: MedplayaDeletedMessageEvent): void
    {
        // console.log('MedplayaDeletedMessageEvent: ', event);
    }
}
