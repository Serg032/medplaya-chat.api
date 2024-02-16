/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaGetMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetMessagesHandler', () =>
{
    let handler: MedplayaGetMessagesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaGetMessagesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaGetMessagesHandler>(MedplayaGetMessagesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaGetMessagesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaGetMessagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a medplayaMockMessageData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockMessageData);
        });
    });
});
