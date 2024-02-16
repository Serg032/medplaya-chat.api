import { MedplayaUpdatedAndIncrementedMessageEvent } from './medplaya-updated-and-incremented-message.event';

export class MedplayaUpdatedAndIncrementedMessagesEvent
{
    constructor(
        public readonly messages: MedplayaUpdatedAndIncrementedMessageEvent[],
    ) {}
}
