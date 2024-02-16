import { MedplayaUpdatedClientEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedClientEvent)
export class MedplayaUpdatedClientEventHandler implements IEventHandler<MedplayaUpdatedClientEvent>
{
    handle(event: MedplayaUpdatedClientEvent): void
    {
        // console.log('UpdatedClientEvent: ', event);
    }
}
