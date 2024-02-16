import { MedplayaUpdateMessageByIdController, MedplayaUpdateMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessageByIdController', () =>
{
    let controller: MedplayaUpdateMessageByIdController;
    let handler: MedplayaUpdateMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpdateMessageByIdController,
            ],
            providers: [
                {
                    provide : MedplayaUpdateMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpdateMessageByIdController>(MedplayaUpdateMessageByIdController);
        handler = module.get<MedplayaUpdateMessageByIdHandler>(MedplayaUpdateMessageByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessageByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a message updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main(medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
