import { MedplayaIMessageRepository, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaPaginateMessagesService } from '@app/medplaya/message/application/paginate/medplaya-paginate-messages.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateMessagesService', () =>
{
    let service: MedplayaPaginateMessagesService;
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
                MedplayaPaginateMessagesService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaPaginateMessagesService);
        repository = module.get(MedplayaIMessageRepository);
        mockRepository = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate messages', async () =>
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
