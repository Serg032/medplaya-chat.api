import { medplayaMockClientData, MedplayaUpsertClientCommand } from '@app/medplaya/client';
import { MedplayaUpsertClientCommandHandler } from '@app/medplaya/client/application/upsert/medplaya-upsert-client.command-handler';
import { MedplayaUpsertClientService } from '@app/medplaya/client/application/upsert/medplaya-upsert-client.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertClientCommandHandler', () =>
{
    let commandHandler: MedplayaUpsertClientCommandHandler;
    let service: MedplayaUpsertClientService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpsertClientCommandHandler,
                {
                    provide : MedplayaUpsertClientService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpsertClientCommandHandler>(MedplayaUpsertClientCommandHandler);
        service = module.get<MedplayaUpsertClientService>(MedplayaUpsertClientService);
    });

    describe('main', () =>
    {
        test('UpsertClientCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the MedplayaUpsertClientService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpsertClientCommand(
                    {
                        id: medplayaMockClientData[0].id,
                        name: medplayaMockClientData[0].name,
                        lastname: medplayaMockClientData[0].lastname,
                        username: medplayaMockClientData[0].username,
                        checkin: medplayaMockClientData[0].checkin,
                        checkout: medplayaMockClientData[0].checkout,
                        code: medplayaMockClientData[0].code,
                        room: medplayaMockClientData[0].room,
                        status: medplayaMockClientData[0].status,
                        tags: medplayaMockClientData[0].tags,
                        otherTags: medplayaMockClientData[0].otherTags,
                        isActive: medplayaMockClientData[0].isActive,
                        amount: medplayaMockClientData[0].amount,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
