import { MedplayaCreateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientsHandler', () =>
{
    let handler: MedplayaCreateClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateClientsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaCreateClientsHandler>(MedplayaCreateClientsHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an medplayaMockClientData created', async () =>
        {
            expect(await handler.main(medplayaMockClientData)).toBe(true);
        });
    });
});
