import { MedplayaFindMessageController, MedplayaFindMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageController', () =>
{
    let controller: MedplayaFindMessageController;
    let handler: MedplayaFindMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaFindMessageController,
            ],
            providers: [
                {
                    provide : MedplayaFindMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaFindMessageController>(MedplayaFindMessageController);
        handler = module.get<MedplayaFindMessageHandler>(MedplayaFindMessageHandler);
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a message', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main()).toBe(medplayaMockMessageData[0]);
        });
    });
});
