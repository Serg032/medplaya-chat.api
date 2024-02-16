import { MedplayaGetClientsController, MedplayaGetClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetClientsController', () =>
{
    let controller: MedplayaGetClientsController;
    let handler: MedplayaGetClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaGetClientsController,
            ],
            providers: [
                {
                    provide : MedplayaGetClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaGetClientsController>(MedplayaGetClientsController);
        handler = module.get<MedplayaGetClientsHandler>(MedplayaGetClientsHandler);
    });

    describe('main', () =>
    {
        test('MedplayaGetClientsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a medplayaMockClientData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData)));
            expect(await controller.main()).toBe(medplayaMockClientData);
        });
    });
});
