import { MedplayaCreatedClientEvent } from './medplaya-created-client.event';

export class MedplayaCreatedClientsEvent
{
    constructor(
        public readonly clients: MedplayaCreatedClientEvent[],
    ) {}
}
