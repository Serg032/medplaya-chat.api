/* eslint-disable key-spacing */
import { MedplayaClient } from '@app/medplaya/client';
import { MedplayaCreatedMessageEvent, MedplayaDeletedMessageEvent, MedplayaUpdatedMessageEvent } from '@app/medplaya/message';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageCreatedAt,
    MedplayaMessageDeletedAt,
    MedplayaMessageId,
    MedplayaMessageQuestion,
    MedplayaMessageUpdatedAt,
} from '@app/medplaya/message/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class MedplayaMessage extends AggregateRoot
{
    id: MedplayaMessageId;
    question: MedplayaMessageQuestion;
    chatResponse: MedplayaMessageChatResponse;
    clientId: MedplayaMessageClientId;
    createdAt: MedplayaMessageCreatedAt;
    updatedAt: MedplayaMessageUpdatedAt;
    deletedAt: MedplayaMessageDeletedAt;
    client: MedplayaClient;

    constructor(
        id: MedplayaMessageId,
        question: MedplayaMessageQuestion,
        chatResponse: MedplayaMessageChatResponse,
        clientId: MedplayaMessageClientId,
        createdAt: MedplayaMessageCreatedAt,
        updatedAt: MedplayaMessageUpdatedAt,
        deletedAt: MedplayaMessageDeletedAt,
        client?: MedplayaClient,
    )
    {
        super();
        this.id = id;
        this.question = question;
        this.chatResponse = chatResponse;
        this.clientId = clientId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.client = client;
    }

    static register(
        id: MedplayaMessageId,
        question: MedplayaMessageQuestion,
        chatResponse: MedplayaMessageChatResponse,
        clientId: MedplayaMessageClientId,
        createdAt: MedplayaMessageCreatedAt,
        updatedAt: MedplayaMessageUpdatedAt,
        deletedAt: MedplayaMessageDeletedAt,
        client?: MedplayaClient,
    ): MedplayaMessage
    {
        return new MedplayaMessage(
            id,
            question,
            chatResponse,
            clientId,
            createdAt,
            updatedAt,
            deletedAt,
            client,
        );
    }

    created(message: MedplayaMessage): void
    {
        this.apply(
            new MedplayaCreatedMessageEvent(
                message.id.value,
                message.question.value,
                message.chatResponse.value,
                message.clientId.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
            ),
        );
    }

    updated(message: MedplayaMessage): void
    {
        this.apply(
            new MedplayaUpdatedMessageEvent(
                message.id?.value,
                message.question?.value,
                message.chatResponse?.value,
                message.clientId?.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
            ),
        );
    }

    deleted(message: MedplayaMessage): void
    {
        this.apply(
            new MedplayaDeletedMessageEvent(
                message.id.value,
                message.question.value,
                message.chatResponse.value,
                message.clientId.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            question: this.question.value,
            chatResponse: this.chatResponse.value,
            clientId: this.clientId.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            client: this.client?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            question: this.question.value,
            chatResponse: this.chatResponse.value,
            clientId: this.clientId.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            client: this.client?.toDTO(),
        };
    }
}
