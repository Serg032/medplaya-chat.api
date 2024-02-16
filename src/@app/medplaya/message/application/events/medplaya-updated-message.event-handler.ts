import { MedplayaUpdatedMessageEvent } from '@app/medplaya/message';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedMessageEvent)
export class MedplayaUpdatedMessageEventHandler implements IEventHandler<MedplayaUpdatedMessageEvent>
{
    handle(event: MedplayaUpdatedMessageEvent): void
    {
        // console.log('UpdatedMessageEvent: ', event);
    }
}
