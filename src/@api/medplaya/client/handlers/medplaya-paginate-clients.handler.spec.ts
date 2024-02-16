/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaPaginateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateClientsHandler', () =>
{
    let handler: MedplayaPaginateClientsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaPaginateClientsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaPaginateClientsHandler>(MedplayaPaginateClientsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaPaginateClientsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaPaginateClientsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a clients', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: medplayaMockClientData.length,
                count: medplayaMockClientData.length,
                rows : medplayaMockClientData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: medplayaMockClientData.length,
                    count: medplayaMockClientData.length,
                    rows : medplayaMockClientData,
                });
        });
    });
});
