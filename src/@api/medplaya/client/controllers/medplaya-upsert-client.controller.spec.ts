import { MedplayaUpsertClientController, MedplayaUpsertClientHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertClientController', () =>
{
    let controller: MedplayaUpsertClientController;
    let handler: MedplayaUpsertClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpsertClientController,
            ],
            providers: [
                {
                    provide : MedplayaUpsertClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpsertClientController>(MedplayaUpsertClientController);
        handler = module.get<MedplayaUpsertClientHandler>(MedplayaUpsertClientHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpsertClientController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an client upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main(medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
