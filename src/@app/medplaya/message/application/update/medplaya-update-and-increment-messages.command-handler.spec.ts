import { medplayaMockMessageData, MedplayaUpdateAndIncrementMessagesCommand } from '@app/medplaya/message';
import { MedplayaUpdateAndIncrementMessagesCommandHandler } from '@app/medplaya/message/application/update/medplaya-update-and-increment-messages.command-handler';
import { MedplayaUpdateAndIncrementMessagesService } from '@app/medplaya/message/application/update/medplaya-update-and-increment-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateAndIncrementMessagesCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateAndIncrementMessagesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateAndIncrementMessagesCommandHandler,
                {
                    provide : MedplayaUpdateAndIncrementMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateAndIncrementMessagesCommandHandler>(MedplayaUpdateAndIncrementMessagesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementMessagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an messages updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new MedplayaUpdateAndIncrementMessagesCommand(
                    {
                        id: medplayaMockMessageData[0].id,
                        question: medplayaMockMessageData[0].question,
                        chatResponse: medplayaMockMessageData[0].chatResponse,
                        clientId: medplayaMockMessageData[0].clientId,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
