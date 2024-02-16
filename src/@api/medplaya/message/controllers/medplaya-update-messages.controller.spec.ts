import { MedplayaUpdateMessagesController, MedplayaUpdateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessagesController', () =>
{
    let controller: MedplayaUpdateMessagesController;
    let handler: MedplayaUpdateMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpdateMessagesController,
            ],
            providers: [
                {
                    provide : MedplayaUpdateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpdateMessagesController>(MedplayaUpdateMessagesController);
        handler = module.get<MedplayaUpdateMessagesHandler>(MedplayaUpdateMessagesHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a messages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main(medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
