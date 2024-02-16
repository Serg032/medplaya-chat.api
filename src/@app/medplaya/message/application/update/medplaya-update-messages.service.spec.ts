/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaUpdateMessagesService } from '@app/medplaya/message/application/update/medplaya-update-messages.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessagesService', () =>
{
    let service: MedplayaUpdateMessagesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaUpdateMessagesService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaUpdateMessagesService);
    });

    describe('main', () =>
    {
        test('UpdateMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a messages and emit event', async () =>
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
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
