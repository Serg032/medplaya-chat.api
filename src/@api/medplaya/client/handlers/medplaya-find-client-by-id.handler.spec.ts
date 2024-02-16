/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientByIdHandler', () =>
{
    let handler: MedplayaFindClientByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindClientByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaFindClientByIdHandler>(MedplayaFindClientByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaFindClientByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindClientByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an client by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await handler.main(
                    medplayaMockClientData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockClientData[0]);
        });
    });
});
