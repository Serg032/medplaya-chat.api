import { MedplayaCreateMessagesController, MedplayaCreateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessagesController', () =>
{
    let controller: MedplayaCreateMessagesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                MedplayaCreateMessagesController,
            ],
            providers: [
                {
                    provide : MedplayaCreateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaCreateMessagesController>(MedplayaCreateMessagesController);
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an medplayaMockMessageData created', async () =>
        {
            expect(
                await controller.main(
                    medplayaMockMessageData,
                ),
            )
                .toBe(undefined);
        });
    });
});
