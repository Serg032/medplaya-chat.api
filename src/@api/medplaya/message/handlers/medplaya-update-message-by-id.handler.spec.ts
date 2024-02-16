/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaUpdateMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessageByIdHandler', () =>
{
    let handler: MedplayaUpdateMessageByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateMessageByIdHandler,
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

        handler = module.get<MedplayaUpdateMessageByIdHandler>(MedplayaUpdateMessageByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('MedplayaUpdateMessageByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessageByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a message updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await handler.main(
                    <MedplayaUpdateMessageByIdInput>medplayaMockMessageData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
