import { MedplayaDeleteClientsCommand } from '@app/medplaya/client';
import { MedplayaDeleteClientsCommandHandler } from '@app/medplaya/client/application/delete/medplaya-delete-clients.command-handler';
import { MedplayaDeleteClientsService } from '@app/medplaya/client/application/delete/medplaya-delete-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientsCommandHandler', () =>
{
    let commandHandler: MedplayaDeleteClientsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaDeleteClientsCommandHandler,
                {
                    provide : MedplayaDeleteClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaDeleteClientsCommandHandler>(MedplayaDeleteClientsCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaDeleteClientsCommand(),
            )).toBe(undefined);
        });
    });
});
