import { MedplayaCreateClientController, MedplayaCreateClientHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientController', () =>
{
    let controller: MedplayaCreateClientController;
    let handler: MedplayaCreateClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaCreateClientController,
            ],
            providers: [
                {
                    provide : MedplayaCreateClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaCreateClientController>(MedplayaCreateClientController);
        handler = module.get<MedplayaCreateClientHandler>(MedplayaCreateClientHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an client created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(
                await controller.main(
                    medplayaMockClientData[0],
                ),
            )
                .toBe(medplayaMockClientData[0]);
        });
    });
});
