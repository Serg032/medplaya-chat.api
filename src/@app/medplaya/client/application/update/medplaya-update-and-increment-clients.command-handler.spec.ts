import { medplayaMockClientData, MedplayaUpdateAndIncrementClientsCommand } from '@app/medplaya/client';
import { MedplayaUpdateAndIncrementClientsCommandHandler } from '@app/medplaya/client/application/update/medplaya-update-and-increment-clients.command-handler';
import { MedplayaUpdateAndIncrementClientsService } from '@app/medplaya/client/application/update/medplaya-update-and-increment-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateAndIncrementClientsCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateAndIncrementClientsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateAndIncrementClientsCommandHandler,
                {
                    provide : MedplayaUpdateAndIncrementClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateAndIncrementClientsCommandHandler>(MedplayaUpdateAndIncrementClientsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementClientsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an clients updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new MedplayaUpdateAndIncrementClientsCommand(
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
            /* eslint-enable key-spacing */
        });
    });
});
