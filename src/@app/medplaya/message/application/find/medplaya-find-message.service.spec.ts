import { MedplayaIMessageRepository, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaFindMessageService } from '@app/medplaya/message/application/find/medplaya-find-message.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageService', () =>
{
    let service: MedplayaFindMessageService;
    let repository: MedplayaIMessageRepository;
    let mockRepository: MedplayaMockMessageRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaFindMessageService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaFindMessageService);
        repository = module.get(MedplayaIMessageRepository);
        mockRepository = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find message', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
