/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaGetClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetClientsHandler', () =>
{
    let handler: MedplayaGetClientsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaGetClientsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaGetClientsHandler>(MedplayaGetClientsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaGetClientsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaGetClientsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a medplayaMockClientData', async () =>
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
