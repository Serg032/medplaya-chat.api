import { medplayaMockClientData, MedplayaUpdateClientByIdCommand } from '@app/medplaya/client';
import { MedplayaUpdateClientByIdCommandHandler } from '@app/medplaya/client/application/update/medplaya-update-client-by-id.command-handler';
import { MedplayaUpdateClientByIdService } from '@app/medplaya/client/application/update/medplaya-update-client-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientByIdCommandHandler', () =>
{
    let commandHandler: MedplayaUpdateClientByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaUpdateClientByIdCommandHandler,
                {
                    provide : MedplayaUpdateClientByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaUpdateClientByIdCommandHandler>(MedplayaUpdateClientByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateClientByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an client created', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaUpdateClientByIdCommand(
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
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
