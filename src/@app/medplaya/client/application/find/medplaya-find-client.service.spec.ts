import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaFindClientService } from '@app/medplaya/client/application/find/medplaya-find-client.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientService', () =>
{
    let service: MedplayaFindClientService;
    let repository: MedplayaIClientRepository;
    let mockRepository: MedplayaMockClientRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaFindClientService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaFindClientService);
        repository = module.get(MedplayaIClientRepository);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('MedplayaFindClientService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find client', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
