import { MedplayaCreateMessageCommandHandler } from './medplaya-create-message.command-handler';
import { MedplayaCreateMessageService } from './medplaya-create-message.service';
import { MedplayaCreateMessageCommand, medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessageCommandHandler', () =>
{
    let commandHandler: MedplayaCreateMessageCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateMessageCommandHandler,
                {
                    provide : MedplayaCreateMessageService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaCreateMessageCommandHandler>(MedplayaCreateMessageCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateMessageCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the MedplayaCreateMessageService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaCreateMessageCommand(
                    {
                        id: medplayaMockMessageData[0].id,
                        question: medplayaMockMessageData[0].question,
                        chatResponse: medplayaMockMessageData[0].chatResponse,
                        clientId: medplayaMockMessageData[0].clientId,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
