/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageByIdHandler', () =>
{
    let handler: MedplayaFindMessageByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindMessageByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaFindMessageByIdHandler>(MedplayaFindMessageByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaFindMessageByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an message by id', async () =>
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
