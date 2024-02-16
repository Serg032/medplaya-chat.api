/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteClientByIdController, MedplayaDeleteClientByIdHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientByIdController', () =>
{
    let controller: MedplayaDeleteClientByIdController;
    let handler: MedplayaDeleteClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaDeleteClientByIdController,
            ],
            providers: [
                {
                    provide : MedplayaDeleteClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaDeleteClientByIdController>(MedplayaDeleteClientByIdController);
        handler = module.get<MedplayaDeleteClientByIdHandler>(MedplayaDeleteClientByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an client deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await controller.main(medplayaMockClientData[0].id)).toBe(medplayaMockClientData[0]);
        });
    });
});
