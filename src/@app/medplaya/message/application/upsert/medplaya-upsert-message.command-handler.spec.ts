import { medplayaMockMessageData, MedplayaUpsertMessageCommand } from '@app/medplaya/message';
import { MedplayaUpsertMessageCommandHandler } from '@app/medplaya/message/application/upsert/medplaya-upsert-message.command-handler';
import { MedplayaUpsertMessageService } from '@app/medplaya/message/application/upsert/medplaya-upsert-message.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertMessageCommandHandler', () =>
{
    let commandHandler: MedplayaUpsertMessageCommandHandler;
    let service: MedplayaUpsertMessageService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpsertMessageCommandHandler,
                {
                    provide : MedplayaUpsertMessageService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpsertMessageCommandHandler>(MedplayaUpsertMessageCommandHandler);
        service = module.get<MedplayaUpsertMessageService>(MedplayaUpsertMessageService);
    });

    describe('main', () =>
    {
        test('UpsertMessageCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the MedplayaUpsertMessageService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpsertMessageCommand(
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
