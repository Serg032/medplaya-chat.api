import { MedplayaDeleteMessagesController, MedplayaDeleteMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessagesController', () =>
{
    let controller: MedplayaDeleteMessagesController;
    let handler: MedplayaDeleteMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaDeleteMessagesController,
            ],
            providers: [
                {
                    provide : MedplayaDeleteMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaDeleteMessagesController>(MedplayaDeleteMessagesController);
        handler = module.get<MedplayaDeleteMessagesHandler>(MedplayaDeleteMessagesHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an medplayaMockMessageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData)));
            expect(await controller.main()).toBe(medplayaMockMessageData);
        });
    });
});
