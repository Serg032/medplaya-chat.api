import { MedplayaIClientRepository, medplayaMockClientData, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaFindClientByIdService } from '@app/medplaya/client/application/find/medplaya-find-client-by-id.service';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientByIdService', () =>
{
    let service: MedplayaFindClientByIdService;
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
                MedplayaFindClientByIdService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaFindClientByIdService);
        repository = module.get(MedplayaIClientRepository);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('FindClientByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find client by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new MedplayaClientId(medplayaMockClientData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
