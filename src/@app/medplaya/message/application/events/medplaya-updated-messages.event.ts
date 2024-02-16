import { MedplayaUpdatedMessageEvent } from './medplaya-updated-message.event';

export class MedplayaUpdatedMessagesEvent
{
    constructor(
        public readonly messages: MedplayaUpdatedMessageEvent[],
    ) {}
}
