/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaDeleteMessageByIdService } from '@app/medplaya/message/application/delete/medplaya-delete-message-by-id.service';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessageByIdService', () =>
{
    let service: MedplayaDeleteMessageByIdService;
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
                MedplayaDeleteMessageByIdService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaDeleteMessageByIdService);
        repository = module.get(MedplayaIMessageRepository);
        mockRepository = module.get(MedplayaMockMessageRepository);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessageByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete message and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new MedplayaMessageId(medplayaMockMessageData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
