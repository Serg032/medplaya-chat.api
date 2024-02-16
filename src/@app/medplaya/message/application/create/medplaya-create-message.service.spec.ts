/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaCreateMessageService } from '@app/medplaya/message/application/create/medplaya-create-message.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessageService', () =>

{
    let service: MedplayaCreateMessageService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaCreateMessageService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaCreateMessageService);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessageService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a message and emit event', async () =>
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
