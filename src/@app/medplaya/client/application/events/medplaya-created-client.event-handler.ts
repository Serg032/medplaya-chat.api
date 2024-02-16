import { MedplayaCreatedClientEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaCreatedClientEvent)
export class MedplayaCreatedClientEventHandler implements IEventHandler<MedplayaCreatedClientEvent>
{
    handle(event: MedplayaCreatedClientEvent): void
    {
        // console.log('MedplayaCreatedClientEvent: ', event);
    }
}
