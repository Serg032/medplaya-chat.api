/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateClientsInput } from '@api/graphql';
import { MedplayaUpdateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientsHandler', () =>
{
    let handler: MedplayaUpdateClientsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateClientsHandler,
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

        handler = module.get<MedplayaUpdateClientsHandler>(MedplayaUpdateClientsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaUpdateClientsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a clients updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await handler.main(
                    <MedplayaUpdateClientsInput>medplayaMockClientData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockClientData[0]);
        });
    });
});
