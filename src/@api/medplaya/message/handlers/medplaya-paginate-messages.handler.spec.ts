/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaPaginateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateMessagesHandler', () =>
{
    let handler: MedplayaPaginateMessagesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaPaginateMessagesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaPaginateMessagesHandler>(MedplayaPaginateMessagesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaPaginateMessagesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaPaginateMessagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a messages', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: medplayaMockMessageData.length,
                count: medplayaMockMessageData.length,
                rows : medplayaMockMessageData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: medplayaMockMessageData.length,
                    count: medplayaMockMessageData.length,
                    rows : medplayaMockMessageData,
                });
        });
    });
});
