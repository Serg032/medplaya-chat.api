import { MedplayaCreateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessagesHandler', () =>
{
    let handler: MedplayaCreateMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateMessagesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<MedplayaCreateMessagesHandler>(MedplayaCreateMessagesHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessagesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an medplayaMockMessageData created', async () =>
        {
            expect(await handler.main(medplayaMockMessageData)).toBe(true);
        });
    });
});
