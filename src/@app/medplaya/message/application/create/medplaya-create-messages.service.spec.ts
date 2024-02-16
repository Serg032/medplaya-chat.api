/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaCreateMessagesService } from '@app/medplaya/message/application/create/medplaya-create-messages.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessagesService', () =>
{
    let service: MedplayaCreateMessagesService;
    let mockRepository: MedplayaMockMessageRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaCreateMessagesService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaCreateMessagesService);
        mockRepository = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('CreateMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create messages and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
