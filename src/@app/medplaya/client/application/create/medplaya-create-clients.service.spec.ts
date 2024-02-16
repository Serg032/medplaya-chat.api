/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaCreateClientsService } from '@app/medplaya/client/application/create/medplaya-create-clients.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientsService', () =>
{
    let service: MedplayaCreateClientsService;
    let mockRepository: MedplayaMockClientRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaCreateClientsService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaCreateClientsService);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('CreateClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create clients and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
