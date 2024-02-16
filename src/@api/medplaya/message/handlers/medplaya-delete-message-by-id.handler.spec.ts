/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessageByIdController', () =>
{
    let handler: MedplayaDeleteMessageByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteMessageByIdHandler,
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

        handler = module.get<MedplayaDeleteMessageByIdHandler>(MedplayaDeleteMessageByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessageByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an message deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    medplayaMockMessageData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
