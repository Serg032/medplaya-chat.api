/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaUpdateMessageByIdService } from '@app/medplaya/message/application/update/medplaya-update-message-by-id.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessageByIdService', () =>
{
    let service: MedplayaUpdateMessageByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaUpdateMessageByIdService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaUpdateMessageByIdService);
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessageByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a message and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new MedplayaMessageId(medplayaMockMessageData[0].id),
                        question: new MedplayaMessageQuestion(medplayaMockMessageData[0].question),
                        chatResponse: new MedplayaMessageChatResponse(medplayaMockMessageData[0].chatResponse),
                        clientId: new MedplayaMessageClientId(medplayaMockMessageData[0].clientId),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
