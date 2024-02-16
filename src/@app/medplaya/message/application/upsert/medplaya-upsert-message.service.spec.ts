/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaUpsertMessageService } from '@app/medplaya/message/application/upsert/medplaya-upsert-message.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertMessageService', () =>

{
    let service: MedplayaUpsertMessageService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaUpsertMessageService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaUpsertMessageService);
    });

    describe('main', () =>
    {
        test('MedplayaUpsertMessageService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a message and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new MedplayaMessageId(medplayaMockMessageData[0].id),
                        question: new MedplayaMessageQuestion(medplayaMockMessageData[0].question),
                        chatResponse: new MedplayaMessageChatResponse(medplayaMockMessageData[0].chatResponse),
                        clientId: new MedplayaMessageClientId(medplayaMockMessageData[0].clientId),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
