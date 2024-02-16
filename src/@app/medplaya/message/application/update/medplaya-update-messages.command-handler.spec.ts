import { medplayaMockMessageData, MedplayaUpdateMessagesCommand } from '@app/medplaya/message';
import { MedplayaUpdateMessagesCommandHandler } from '@app/medplaya/message/application/update/medplaya-update-messages.command-handler';
import { MedplayaUpdateMessagesService } from '@app/medplaya/message/application/update/medplaya-update-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessagesCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateMessagesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateMessagesCommandHandler,
                {
                    provide : MedplayaUpdateMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateMessagesCommandHandler>(MedplayaUpdateMessagesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateMessagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an messages updated', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpdateMessagesCommand(
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
        });
    });
});
