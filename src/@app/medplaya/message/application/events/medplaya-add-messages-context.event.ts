import { MedplayaCreatedMessageEvent, MedplayaCreatedMessagesEvent, MedplayaDeletedMessageEvent, MedplayaDeletedMessagesEvent, MedplayaMessage, MedplayaUpdatedAndIncrementedMessageEvent, MedplayaUpdatedAndIncrementedMessagesEvent, MedplayaUpdatedMessageEvent, MedplayaUpdatedMessagesEvent } from '@app/medplaya/message';
import { AggregateRoot } from '@nestjs/cqrs';

export class MedplayaAddMessagesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: MedplayaMessage[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new MedplayaCreatedMessagesEvent(
                this.aggregateRoots.map(message =>
                    new MedplayaCreatedMessageEvent(
                        message.id.value,
                        message.question.value,
                        message.chatResponse.value,
                        message.clientId.value,
                        message.createdAt?.value,
                        message.updatedAt?.value,
                        message.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new MedplayaUpdatedMessagesEvent(
                this.aggregateRoots.map(message =>
                    new MedplayaUpdatedMessageEvent(
                        message.id.value,
                        message.question.value,
                        message.chatResponse.value,
                        message.clientId.value,
                        message.createdAt?.value,
                        message.updatedAt?.value,
                        message.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new MedplayaUpdatedAndIncrementedMessagesEvent(
                this.aggregateRoots.map(message =>
                    new MedplayaUpdatedAndIncrementedMessageEvent(
                        message.id.value,
                        message.question.value,
                        message.chatResponse.value,
                        message.clientId.value,
                        message.createdAt?.value,
                        message.updatedAt?.value,
                        message.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new MedplayaDeletedMessagesEvent(
                this.aggregateRoots.map(message =>
                    new MedplayaDeletedMessageEvent(
                        message.id.value,
                        message.question.value,
                        message.chatResponse.value,
                        message.clientId.value,
                        message.createdAt?.value,
                        message.updatedAt?.value,
                        message.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
