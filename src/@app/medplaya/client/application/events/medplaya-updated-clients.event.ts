import { MedplayaUpdatedClientEvent } from './medplaya-updated-client.event';

export class MedplayaUpdatedClientsEvent
{
    constructor(
        public readonly clients: MedplayaUpdatedClientEvent[],
    ) {}
}
