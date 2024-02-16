import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaRawSQLClientsService } from '@app/medplaya/client/application/raw-sql/medplaya-raw-sql-clients.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaRawSQLClientsService ', () =>
{
    let service: MedplayaRawSQLClientsService ;
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
                MedplayaRawSQLClientsService ,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(MedplayaRawSQLClientsService );
        repository      = module.get(MedplayaIClientRepository);
        mockRepository  = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('RawSQLClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get clients', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
