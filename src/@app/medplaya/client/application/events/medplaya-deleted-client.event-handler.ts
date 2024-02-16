import { MedplayaDeletedClientEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaDeletedClientEvent)
export class MedplayaDeletedClientEventHandler implements IEventHandler<MedplayaDeletedClientEvent>
{
    handle(event: MedplayaDeletedClientEvent): void
    {
        // console.log('MedplayaDeletedClientEvent: ', event);
    }
}
