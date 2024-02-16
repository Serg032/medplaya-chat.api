/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaDeleteClientsService } from '@app/medplaya/client/application/delete/medplaya-delete-clients.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientsService', () =>
{
    let service: MedplayaDeleteClientsService;
    let repository: MedplayaIClientRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MedplayaDeleteClientsService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaDeleteClientsService);
        repository = module.get(MedplayaIClientRepository);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete client and emit event', async () =>
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
