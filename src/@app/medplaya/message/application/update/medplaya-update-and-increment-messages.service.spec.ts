/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaUpdateAndIncrementMessagesService } from '@app/medplaya/message/application/update/medplaya-update-and-increment-messages.service';
import {
    MedplayaMessageChatResponse,
    MedplayaMessageClientId,
    MedplayaMessageId,
    MedplayaMessageQuestion,
} from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateAndIncrementMessagesService', () =>
{
    let service: MedplayaUpdateAndIncrementMessagesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaUpdateAndIncrementMessagesService,
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

        service = module.get(MedplayaUpdateAndIncrementMessagesService);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a messages and emit event', async () =>
        {
            /* eslint-disable key-spacing */
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
            /* eslint-enable key-spacing */
        });
    });
});
