/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientByIdController', () =>
{
    let handler: MedplayaDeleteClientByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteClientByIdHandler,
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

        handler = module.get<MedplayaDeleteClientByIdHandler>(MedplayaDeleteClientByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an client deleted', async () =>
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
