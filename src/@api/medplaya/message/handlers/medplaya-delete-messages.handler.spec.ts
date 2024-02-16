/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessagesHandler', () =>
{
    let handler: MedplayaDeleteMessagesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteMessagesHandler,
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

        handler = module.get<MedplayaDeleteMessagesHandler>(MedplayaDeleteMessagesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaDeleteMessagesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an medplayaMockMessageData deleted', async () =>
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
