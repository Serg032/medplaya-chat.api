import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaGetClientsService } from '@app/medplaya/client/application/get/medplaya-get-clients.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetClientsService', () =>
{
    let service: MedplayaGetClientsService;
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
                MedplayaGetClientsService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaGetClientsService);
        repository = module.get(MedplayaIClientRepository);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('GetClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get clients', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
