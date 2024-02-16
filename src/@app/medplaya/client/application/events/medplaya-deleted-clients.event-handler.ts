import { MedplayaDeletedClientsEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaDeletedClientsEvent)
export class MedplayaDeletedClientsEventHandler implements IEventHandler<MedplayaDeletedClientsEvent>
{
    handle(event: MedplayaDeletedClientsEvent): void
    {
        // console.log('DeletedClientsEvent: ', event);
    }
}
