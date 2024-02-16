/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIMessageRepository, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaDeleteMessagesService } from '@app/medplaya/message/application/delete/medplaya-delete-messages.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessagesService', () =>
{
    let service: MedplayaDeleteMessagesService;
    let repository: MedplayaIMessageRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaDeleteMessagesService,
                MedplayaMockMessageRepository,
                {
                    provide : MedplayaIMessageRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaDeleteMessagesService);
        repository = module.get(MedplayaIMessageRepository);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessagesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete message and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
