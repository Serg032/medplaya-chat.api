import { MedplayaUpsertMessageController, MedplayaUpsertMessageHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertMessageController', () =>
{
    let controller: MedplayaUpsertMessageController;
    let handler: MedplayaUpsertMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaUpsertMessageController,
            ],
            providers: [
                {
                    provide : MedplayaUpsertMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaUpsertMessageController>(MedplayaUpsertMessageController);
        handler = module.get<MedplayaUpsertMessageHandler>(MedplayaUpsertMessageHandler);
    });

    describe('main', () =>
    {
        test('MedplayaUpsertMessageController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an message upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main(medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
