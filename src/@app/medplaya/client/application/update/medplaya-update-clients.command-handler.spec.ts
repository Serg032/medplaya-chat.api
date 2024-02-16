import { medplayaMockClientData, MedplayaUpdateClientsCommand } from '@app/medplaya/client';
import { MedplayaUpdateClientsCommandHandler } from '@app/medplaya/client/application/update/medplaya-update-clients.command-handler';
import { MedplayaUpdateClientsService } from '@app/medplaya/client/application/update/medplaya-update-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientsCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateClientsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateClientsCommandHandler,
                {
                    provide : MedplayaUpdateClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateClientsCommandHandler>(MedplayaUpdateClientsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateClientsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an clients updated', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpdateClientsCommand(
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
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
