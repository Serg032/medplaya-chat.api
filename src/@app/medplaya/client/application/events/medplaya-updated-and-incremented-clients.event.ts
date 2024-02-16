import { MedplayaUpdatedAndIncrementedClientEvent } from './medplaya-updated-and-incremented-client.event';

export class MedplayaUpdatedAndIncrementedClientsEvent
{
    constructor(
        public readonly clients: MedplayaUpdatedAndIncrementedClientEvent[],
    ) {}
}
