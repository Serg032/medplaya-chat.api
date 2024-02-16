import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaPaginateClientsService } from '@app/medplaya/client/application/paginate/medplaya-paginate-clients.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateClientsService', () =>
{
    let service: MedplayaPaginateClientsService;
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
                MedplayaPaginateClientsService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaPaginateClientsService);
        repository = module.get(MedplayaIClientRepository);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate clients', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
