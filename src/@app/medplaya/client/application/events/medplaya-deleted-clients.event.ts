import { MedplayaDeletedClientEvent } from './medplaya-deleted-client.event';

export class MedplayaDeletedClientsEvent
{
    constructor(
        public readonly clients: MedplayaDeletedClientEvent[],
    ) {}
}
