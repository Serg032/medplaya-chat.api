import { MedplayaCreateClientCommandHandler } from './medplaya-create-client.command-handler';
import { MedplayaCreateClientService } from './medplaya-create-client.service';
import { MedplayaCreateClientCommand, medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientCommandHandler', () =>
{
    let commandHandler: MedplayaCreateClientCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateClientCommandHandler,
                {
                    provide : MedplayaCreateClientService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaCreateClientCommandHandler>(MedplayaCreateClientCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateClientCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the MedplayaCreateClientService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaCreateClientCommand(
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
