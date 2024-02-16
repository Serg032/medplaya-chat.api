/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateMessagesInput } from '@api/graphql';
import { MedplayaUpdateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessagesHandler', () =>
{
    let handler: MedplayaUpdateMessagesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateMessagesHandler,
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

        handler = module.get<MedplayaUpdateMessagesHandler>(MedplayaUpdateMessagesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaUpdateMessagesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a messages updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    <MedplayaUpdateMessagesInput>medplayaMockMessageData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
