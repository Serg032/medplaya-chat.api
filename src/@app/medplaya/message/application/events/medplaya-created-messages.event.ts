import { MedplayaCreatedMessageEvent } from './medplaya-created-message.event';

export class MedplayaCreatedMessagesEvent
{
    constructor(
        public readonly messages: MedplayaCreatedMessageEvent[],
    ) {}
}
