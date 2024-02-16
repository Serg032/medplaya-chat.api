/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientsHandler', () =>
{
    let handler: MedplayaDeleteClientsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteClientsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaDeleteClientsHandler>(MedplayaDeleteClientsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaDeleteClientsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an medplayaMockClientData deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockClientData);
        });
    });
});
