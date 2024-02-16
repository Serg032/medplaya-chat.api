/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIClientRepository, medplayaMockClientData, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaUpdateAndIncrementClientsService } from '@app/medplaya/client/application/update/medplaya-update-and-increment-clients.service';
import {
    MedplayaClientAmount,
    MedplayaClientCheckin,
    MedplayaClientCheckout,
    MedplayaClientCode,
    MedplayaClientId,
    MedplayaClientIsActive,
    MedplayaClientLastname,
    MedplayaClientName,
    MedplayaClientOtherTags,
    MedplayaClientRoom,
    MedplayaClientStatus,
    MedplayaClientTags,
    MedplayaClientUsername,
} from '@app/medplaya/client/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateAndIncrementClientsService', () =>
{
    let service: MedplayaUpdateAndIncrementClientsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaUpdateAndIncrementClientsService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaUpdateAndIncrementClientsService);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a clients and emit event', async () =>
        {
            /* eslint-disable key-spacing */
            expect(
                await service.main(
                    {
                        id: new MedplayaClientId(medplayaMockClientData[0].id),
                        name: new MedplayaClientName(medplayaMockClientData[0].name),
                        lastname: new MedplayaClientLastname(medplayaMockClientData[0].lastname),
                        username: new MedplayaClientUsername(medplayaMockClientData[0].username),
                        checkin: new MedplayaClientCheckin(medplayaMockClientData[0].checkin),
                        checkout: new MedplayaClientCheckout(medplayaMockClientData[0].checkout),
                        code: new MedplayaClientCode(medplayaMockClientData[0].code),
                        room: new MedplayaClientRoom(medplayaMockClientData[0].room),
                        status: new MedplayaClientStatus(medplayaMockClientData[0].status),
                        tags: new MedplayaClientTags(medplayaMockClientData[0].tags),
                        otherTags: new MedplayaClientOtherTags(medplayaMockClientData[0].otherTags),
                        isActive: new MedplayaClientIsActive(medplayaMockClientData[0].isActive),
                        amount: new MedplayaClientAmount(medplayaMockClientData[0].amount),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
