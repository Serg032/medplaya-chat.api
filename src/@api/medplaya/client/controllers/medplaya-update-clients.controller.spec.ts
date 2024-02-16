import { MedplayaUpdateClientsController, MedplayaUpdateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientsController', () =>
{
    let controller: MedplayaUpdateClientsController;
    let handler: MedplayaUpdateClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpdateClientsController,
            ],
            providers: [
                {
                    provide : MedplayaUpdateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpdateClientsController>(MedplayaUpdateClientsController);
        handler = module.get<MedplayaUpdateClientsHandler>(MedplayaUpdateClientsHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a clients updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main(medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
