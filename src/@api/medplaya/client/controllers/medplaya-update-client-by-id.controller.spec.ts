import { MedplayaUpdateClientByIdController, MedplayaUpdateClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientByIdController', () =>
{
    let controller: MedplayaUpdateClientByIdController;
    let handler: MedplayaUpdateClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpdateClientByIdController,
            ],
            providers: [
                {
                    provide : MedplayaUpdateClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpdateClientByIdController>(MedplayaUpdateClientByIdController);
        handler = module.get<MedplayaUpdateClientByIdHandler>(MedplayaUpdateClientByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a client updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main(medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
