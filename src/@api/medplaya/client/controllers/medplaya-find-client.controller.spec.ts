import { MedplayaFindClientController, MedplayaFindClientHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientController', () =>
{
    let controller: MedplayaFindClientController;
    let handler: MedplayaFindClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaFindClientController,
            ],
            providers: [
                {
                    provide : MedplayaFindClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaFindClientController>(MedplayaFindClientController);
        handler = module.get<MedplayaFindClientHandler>(MedplayaFindClientHandler);
    });

    describe('main', () =>
    {
        test('MedplayaFindClientController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a client', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main()).toBe(medplayaMockClientData[0]);
        });
    });
});
