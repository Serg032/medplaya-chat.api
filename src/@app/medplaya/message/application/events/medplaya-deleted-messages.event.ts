import { MedplayaDeletedMessageEvent } from './medplaya-deleted-message.event';

export class MedplayaDeletedMessagesEvent
{
    constructor(
        public readonly messages: MedplayaDeletedMessageEvent[],
    ) {}
}
