import { MedplayaDeleteMessageByIdCommand, medplayaMockMessageData } from '@app/medplaya/message';
import { MedplayaDeleteMessageByIdCommandHandler } from '@app/medplaya/message/application/delete/medplaya-delete-message-by-id.command-handler';
import { MedplayaDeleteMessageByIdService } from '@app/medplaya/message/application/delete/medplaya-delete-message-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessageByIdCommandHandler', () =>
{
    let commandHandler: MedplayaDeleteMessageByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaDeleteMessageByIdCommandHandler,
                {
                    provide : MedplayaDeleteMessageByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaDeleteMessageByIdCommandHandler>(MedplayaDeleteMessageByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessageByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the MedplayaDeleteMessageByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaDeleteMessageByIdCommand(
                    medplayaMockMessageData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
