import { medplayaMockMessageData, MedplayaUpdateMessageByIdCommand } from '@app/medplaya/message';
import { MedplayaUpdateMessageByIdCommandHandler } from '@app/medplaya/message/application/update/medplaya-update-message-by-id.command-handler';
import { MedplayaUpdateMessageByIdService } from '@app/medplaya/message/application/update/medplaya-update-message-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessageByIdCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateMessageByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateMessageByIdCommandHandler,
                {
                    provide : MedplayaUpdateMessageByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateMessageByIdCommandHandler>(MedplayaUpdateMessageByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateMessageByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an message created', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpdateMessageByIdCommand(
                    {
                        id: medplayaMockMessageData[0].id,
                        question: medplayaMockMessageData[0].question,
                        chatResponse: medplayaMockMessageData[0].chatResponse,
                        clientId: medplayaMockMessageData[0].clientId,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
