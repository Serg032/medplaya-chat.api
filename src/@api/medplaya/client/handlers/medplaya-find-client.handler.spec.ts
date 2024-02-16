/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindClientHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientHandler', () =>
{
    let handler: MedplayaFindClientHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindClientHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaFindClientHandler>(MedplayaFindClientHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaFindClientHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindClientHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a client', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockClientData[0]);
        });
    });
});
