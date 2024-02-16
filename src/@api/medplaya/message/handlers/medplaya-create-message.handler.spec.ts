/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaCreateMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessageHandler', () =>
{
    let handler: MedplayaCreateMessageHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaCreateMessageHandler,
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

        handler = module.get<MedplayaCreateMessageHandler>(MedplayaCreateMessageHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessageHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an message created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    medplayaMockMessageData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
