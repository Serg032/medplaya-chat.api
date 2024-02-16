import { MedplayaFindMessageByIdController, MedplayaFindMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageByIdController', () =>
{
    let controller: MedplayaFindMessageByIdController;
    let handler: MedplayaFindMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaFindMessageByIdController,
            ],
            providers: [
                {
                    provide : MedplayaFindMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaFindMessageByIdController>(MedplayaFindMessageByIdController);
        handler = module.get<MedplayaFindMessageByIdHandler>(MedplayaFindMessageByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an message by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main(medplayaMockMessageData[0].id)).toBe(medplayaMockMessageData[0]);
        });
    });
});
