import { MedplayaUpdatedAndIncrementedClientsEvent } from '@app/medplaya/client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MedplayaUpdatedAndIncrementedClientsEvent)
export class MedplayaUpdatedAndIncrementedClientsEventHandler implements IEventHandler<MedplayaUpdatedAndIncrementedClientsEvent>
{
    handle(event: MedplayaUpdatedAndIncrementedClientsEvent): void
    {
        // console.log('MedplayaUpdatedAndIncrementedClientsEvent: ', event);
    }
}
