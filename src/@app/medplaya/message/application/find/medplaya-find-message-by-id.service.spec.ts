import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaFindMessageByIdService } from '@app/medplaya/message/application/find/medplaya-find-message-by-id.service';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageByIdService', () =>
{
    let service: MedplayaFindMessageByIdService;
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
                MedplayaFindMessageByIdService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaFindMessageByIdService);
        repository = module.get(MedplayaIMessageRepository);
        mockRepository = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('FindMessageByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find message by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new MedplayaMessageId(medplayaMockMessageData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
