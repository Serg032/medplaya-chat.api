/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpsertMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertMessageHandler', () =>
{
    let handler: MedplayaUpsertMessageHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpsertMessageHandler,
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

        handler = module.get<MedplayaUpsertMessageHandler>(MedplayaUpsertMessageHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('MedplayaUpsertMessageHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an message upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    medplayaMockMessageData[0],
                    'Europe/Madrid',
                ))
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
