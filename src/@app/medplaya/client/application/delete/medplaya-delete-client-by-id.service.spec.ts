/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaIClientRepository, medplayaMockClientData, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaDeleteClientByIdService } from '@app/medplaya/client/application/delete/medplaya-delete-client-by-id.service';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientByIdService', () =>
{
    let service: MedplayaDeleteClientByIdService;
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
                MedplayaDeleteClientByIdService,
                MedplayaMockClientRepository,
                {
                    provide : MedplayaIClientRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MedplayaDeleteClientByIdService);
        repository = module.get(MedplayaIClientRepository);
        mockRepository = module.get(MedplayaMockClientRepository);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete client and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new MedplayaClientId(medplayaMockClientData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
