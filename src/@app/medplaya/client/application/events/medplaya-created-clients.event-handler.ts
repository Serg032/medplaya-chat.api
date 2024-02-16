import { MedplayaCreatedClientsEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaCreatedClientsEvent)
export class MedplayaCreatedClientsEventHandler implements IEventHandler<MedplayaCreatedClientsEvent>
{
    handle(event: MedplayaCreatedClientsEvent): void
    {
        // console.log('CreatedClientsEvent: ', event);
    }
}
