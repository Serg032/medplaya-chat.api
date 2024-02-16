import { MedplayaCreateClientsCommand, medplayaMockClientData } from '@app/medplaya/client';
import { MedplayaCreateClientsCommandHandler } from '@app/medplaya/client/application/create/medplaya-create-clients.command-handler';
import { MedplayaCreateClientsService } from '@app/medplaya/client/application/create/medplaya-create-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('medplayaCreateClientsCommandHandler', () =>
{
    let commandHandler: MedplayaCreateClientsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateClientsCommandHandler,
                {
                    provide : MedplayaCreateClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaCreateClientsCommandHandler>(MedplayaCreateClientsCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return MedplayaMockClientData created', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaCreateClientsCommand(
                    medplayaMockClientData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
