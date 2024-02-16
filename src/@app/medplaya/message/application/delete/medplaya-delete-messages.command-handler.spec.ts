import { MedplayaDeleteMessagesCommand } from '@app/medplaya/message';
import { MedplayaDeleteMessagesCommandHandler } from '@app/medplaya/message/application/delete/medplaya-delete-messages.command-handler';
import { MedplayaDeleteMessagesService } from '@app/medplaya/message/application/delete/medplaya-delete-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessagesCommandHandler', () =>
{
    let commandHandler: MedplayaDeleteMessagesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaDeleteMessagesCommandHandler,
                {
                    provide : MedplayaDeleteMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaDeleteMessagesCommandHandler>(MedplayaDeleteMessagesCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessagesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaDeleteMessagesCommand(),
            )).toBe(undefined);
        });
    });
});
