import { MedplayaFindClientByIdController, MedplayaFindClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientByIdController', () =>
{
    let controller: MedplayaFindClientByIdController;
    let handler: MedplayaFindClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaFindClientByIdController,
            ],
            providers: [
                {
                    provide : MedplayaFindClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaFindClientByIdController>(MedplayaFindClientByIdController);
        handler = module.get<MedplayaFindClientByIdHandler>(MedplayaFindClientByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaFindClientByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an client by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main(medplayaMockClientData[0].id)).toBe(medplayaMockClientData[0]);
        });
    });
});
