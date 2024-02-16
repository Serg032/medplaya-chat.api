import { MedplayaGetMessagesController, MedplayaGetMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetMessagesController', () =>
{
    let controller: MedplayaGetMessagesController;
    let handler: MedplayaGetMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaGetMessagesController,
            ],
            providers: [
                {
                    provide : MedplayaGetMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaGetMessagesController>(MedplayaGetMessagesController);
        handler = module.get<MedplayaGetMessagesHandler>(MedplayaGetMessagesHandler);
    });

    describe('main', () =>
    {
        test('MedplayaGetMessagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a medplayaMockMessageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData)));
            expect(await controller.main()).toBe(medplayaMockMessageData);
        });
    });
});
