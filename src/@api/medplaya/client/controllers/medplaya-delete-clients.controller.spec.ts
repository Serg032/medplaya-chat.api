import { MedplayaDeleteClientsController, MedplayaDeleteClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientsController', () =>
{
    let controller: MedplayaDeleteClientsController;
    let handler: MedplayaDeleteClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaDeleteClientsController,
            ],
            providers: [
                {
                    provide : MedplayaDeleteClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaDeleteClientsController>(MedplayaDeleteClientsController);
        handler = module.get<MedplayaDeleteClientsHandler>(MedplayaDeleteClientsHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an medplayaMockClientData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData)));
            expect(await controller.main()).toBe(medplayaMockClientData);
        });
    });
});
