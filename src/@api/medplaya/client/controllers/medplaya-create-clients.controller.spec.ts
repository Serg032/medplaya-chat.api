import { MedplayaCreateClientsController, MedplayaCreateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientsController', () =>
{
    let controller: MedplayaCreateClientsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                MedplayaCreateClientsController,
            ],
            providers: [
                {
                    provide : MedplayaCreateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaCreateClientsController>(MedplayaCreateClientsController);
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an medplayaMockClientData created', async () =>
        {
            expect(
                await controller.main(
                    medplayaMockClientData,
                ),
            )
                .toBe(undefined);
        });
    });
});
