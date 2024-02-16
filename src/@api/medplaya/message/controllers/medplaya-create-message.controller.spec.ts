import { MedplayaCreateMessageController, MedplayaCreateMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessageController', () =>
{
    let controller: MedplayaCreateMessageController;
    let handler: MedplayaCreateMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaCreateMessageController,
            ],
            providers: [
                {
                    provide : MedplayaCreateMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaCreateMessageController>(MedplayaCreateMessageController);
        handler = module.get<MedplayaCreateMessageHandler>(MedplayaCreateMessageHandler);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessageController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an message created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(
                await controller.main(
                    medplayaMockMessageData[0],
                ),
            )
                .toBe(medplayaMockMessageData[0]);
        });
    });
});
