import { MedplayaUpdatedClientsEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedClientsEvent)
export class MedplayaUpdatedClientsEventHandler implements IEventHandler<MedplayaUpdatedClientsEvent>
{
    handle(event: MedplayaUpdatedClientsEvent): void
    {
        // console.log('MedplayaUpdatedClientsEvent: ', event);
    }
}
