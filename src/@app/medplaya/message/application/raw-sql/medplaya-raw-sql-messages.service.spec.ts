import { MedplayaIMessageRepository, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaRawSQLMessagesService } from '@app/medplaya/message/application/raw-sql/medplaya-raw-sql-messages.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaRawSQLMessagesService ', () =>
{
    let service: MedplayaRawSQLMessagesService ;
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
                MedplayaRawSQLMessagesService ,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(MedplayaRawSQLMessagesService );
        repository      = module.get(MedplayaIMessageRepository);
        mockRepository  = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('RawSQLMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get messages', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
