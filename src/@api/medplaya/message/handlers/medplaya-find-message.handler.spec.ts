/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageHandler', () =>
{
    let handler: MedplayaFindMessageHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindMessageHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaFindMessageHandler>(MedplayaFindMessageHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaFindMessageHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a message', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
