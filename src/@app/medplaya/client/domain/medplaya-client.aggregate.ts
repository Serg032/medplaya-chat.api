/* eslint-disable key-spacing */
import { MedplayaCreatedClientEvent, MedplayaDeletedClientEvent, MedplayaUpdatedClientEvent } from '@app/medplaya/client';
import {
    MedplayaClientAmount,
    MedplayaClientCheckin,
    MedplayaClientCheckout,
    MedplayaClientCode,
    MedplayaClientCreatedAt,
    MedplayaClientDeletedAt,
    MedplayaClientId,
    MedplayaClientIsActive,
    MedplayaClientLastname,
    MedplayaClientName,
    MedplayaClientOtherTags,
    MedplayaClientRoom,
    MedplayaClientStatus,
    MedplayaClientTags,
    MedplayaClientUpdatedAt,
    MedplayaClientUsername,
} from '@app/medplaya/client/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class MedplayaClient extends AggregateRoot
{
    id: MedplayaClientId;
    name: MedplayaClientName;
    lastname: MedplayaClientLastname;
    username: MedplayaClientUsername;
    checkin: MedplayaClientCheckin;
    checkout: MedplayaClientCheckout;
    code: MedplayaClientCode;
    room: MedplayaClientRoom;
    status: MedplayaClientStatus;
    tags: MedplayaClientTags;
    otherTags: MedplayaClientOtherTags;
    isActive: MedplayaClientIsActive;
    amount: MedplayaClientAmount;
    createdAt: MedplayaClientCreatedAt;
    updatedAt: MedplayaClientUpdatedAt;
    deletedAt: MedplayaClientDeletedAt;

    constructor(
        id: MedplayaClientId,
        name: MedplayaClientName,
        lastname: MedplayaClientLastname,
        username: MedplayaClientUsername,
        checkin: MedplayaClientCheckin,
        checkout: MedplayaClientCheckout,
        code: MedplayaClientCode,
        room: MedplayaClientRoom,
        status: MedplayaClientStatus,
        tags: MedplayaClientTags,
        otherTags: MedplayaClientOtherTags,
        isActive: MedplayaClientIsActive,
        amount: MedplayaClientAmount,
        createdAt: MedplayaClientCreatedAt,
        updatedAt: MedplayaClientUpdatedAt,
        deletedAt: MedplayaClientDeletedAt,
    )
    {
        super();
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.checkin = checkin;
        this.checkout = checkout;
        this.code = code;
        this.room = room;
        this.status = status;
        this.tags = tags;
        this.otherTags = otherTags;
        this.isActive = isActive;
        this.amount = amount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: MedplayaClientId,
        name: MedplayaClientName,
        lastname: MedplayaClientLastname,
        username: MedplayaClientUsername,
        checkin: MedplayaClientCheckin,
        checkout: MedplayaClientCheckout,
        code: MedplayaClientCode,
        room: MedplayaClientRoom,
        status: MedplayaClientStatus,
        tags: MedplayaClientTags,
        otherTags: MedplayaClientOtherTags,
        isActive: MedplayaClientIsActive,
        amount: MedplayaClientAmount,
        createdAt: MedplayaClientCreatedAt,
        updatedAt: MedplayaClientUpdatedAt,
        deletedAt: MedplayaClientDeletedAt,
    ): MedplayaClient
    {
        return new MedplayaClient(
            id,
            name,
            lastname,
            username,
            checkin,
            checkout,
            code,
            room,
            status,
            tags,
            otherTags,
            isActive,
            amount,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(client: MedplayaClient): void
    {
        this.apply(
            new MedplayaCreatedClientEvent(
                client.id.value,
                client.name.value,
                client.lastname.value,
                client.username.value,
                client.checkin.value,
                client.checkout.value,
                client.code.value,
                client.room.value,
                client.status?.value,
                client.tags?.value,
                client.otherTags?.value,
                client.isActive.value,
                client.amount?.value,
                client.createdAt?.value,
                client.updatedAt?.value,
                client.deletedAt?.value,
            ),
        );
    }

    updated(client: MedplayaClient): void
    {
        this.apply(
            new MedplayaUpdatedClientEvent(
                client.id?.value,
                client.name?.value,
                client.lastname?.value,
                client.username?.value,
                client.checkin?.value,
                client.checkout?.value,
                client.code?.value,
                client.room?.value,
                client.status?.value,
                client.tags?.value,
                client.otherTags?.value,
                client.isActive?.value,
                client.amount?.value,
                client.createdAt?.value,
                client.updatedAt?.value,
                client.deletedAt?.value,
            ),
        );
    }

    deleted(client: MedplayaClient): void
    {
        this.apply(
            new MedplayaDeletedClientEvent(
                client.id.value,
                client.name.value,
                client.lastname.value,
                client.username.value,
                client.checkin.value,
                client.checkout.value,
                client.code.value,
                client.room.value,
                client.status?.value,
                client.tags?.value,
                client.otherTags?.value,
                client.isActive.value,
                client.amount?.value,
                client.createdAt?.value,
                client.updatedAt?.value,
                client.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            lastname: this.lastname.value,
            username: this.username.value,
            checkin: this.checkin.value,
            checkout: this.checkout.value,
            code: this.code.value,
            room: this.room.value,
            status: this.status?.value,
            tags: this.tags?.value,
            otherTags: this.otherTags?.value,
            isActive: this.isActive.value,
            amount: this.amount?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            lastname: this.lastname.value,
            username: this.username.value,
            checkin: this.checkin.value,
            checkout: this.checkout.value,
            code: this.code.value,
            room: this.room.value,
            status: this.status?.value,
            tags: this.tags?.value,
            otherTags: this.otherTags?.value,
            isActive: this.isActive.value,
            amount: this.amount?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
