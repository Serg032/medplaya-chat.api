/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaUpdateClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientByIdHandler', () =>
{
    let handler: MedplayaUpdateClientByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateClientByIdHandler,
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

        handler = module.get<MedplayaUpdateClientByIdHandler>(MedplayaUpdateClientByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaUpdateClientByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a client updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await handler.main(
                    <MedplayaUpdateClientByIdInput>medplayaMockClientData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(medplayaMockClientData[0]);
        });
    });
});
