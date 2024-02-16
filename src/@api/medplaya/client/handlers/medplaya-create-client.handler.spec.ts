/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaCreateClientHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientHandler', () =>
{
    let handler: MedplayaCreateClientHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaCreateClientHandler,
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

        handler = module.get<MedplayaCreateClientHandler>(MedplayaCreateClientHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an client created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await handler.main(
                    medplayaMockClientData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockClientData[0]);
        });
    });
});
