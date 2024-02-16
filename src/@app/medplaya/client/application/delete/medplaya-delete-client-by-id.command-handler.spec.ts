import { MedplayaDeleteClientByIdCommand, medplayaMockClientData } from '@app/medplaya/client';
import { MedplayaDeleteClientByIdCommandHandler } from '@app/medplaya/client/application/delete/medplaya-delete-client-by-id.command-handler';
import { MedplayaDeleteClientByIdService } from '@app/medplaya/client/application/delete/medplaya-delete-client-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientByIdCommandHandler', () =>
{
    let commandHandler: MedplayaDeleteClientByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaDeleteClientByIdCommandHandler,
                {
                    provide : MedplayaDeleteClientByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MedplayaDeleteClientByIdCommandHandler>(MedplayaDeleteClientByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the MedplayaDeleteClientByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new MedplayaDeleteClientByIdCommand(
                    medplayaMockClientData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
