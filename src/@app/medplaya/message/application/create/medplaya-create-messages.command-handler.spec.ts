import { MedplayaCreateMessagesCommand, medplayaMockMessageData } from '@app/medplaya/message';
import { MedplayaCreateMessagesCommandHandler } from '@app/medplaya/message/application/create/medplaya-create-messages.command-handler';
import { MedplayaCreateMessagesService } from '@app/medplaya/message/application/create/medplaya-create-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('medplayaCreateMessagesCommandHandler', () =>
{
    let commandHandler: MedplayaCreateMessagesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateMessagesCommandHandler,
                {
                    provide : MedplayaCreateMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaCreateMessagesCommandHandler>(MedplayaCreateMessagesCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return MedplayaMockMessageData created', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaCreateMessagesCommand(
                    medplayaMockMessageData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
