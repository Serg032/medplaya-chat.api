import { MedplayaPaginateMessagesController, MedplayaPaginateMessagesHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateMessagesController', () =>
{
    let controller: MedplayaPaginateMessagesController;
    let handler: MedplayaPaginateMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaPaginateMessagesController,
            ],
            providers: [
                {
                    provide : MedplayaPaginateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaPaginateMessagesController>(MedplayaPaginateMessagesController);
        handler = module.get<MedplayaPaginateMessagesHandler>(MedplayaPaginateMessagesHandler);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateMessagesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a medplayaMockMessageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : medplayaMockMessageData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : medplayaMockMessageData,
            });
        });
    });
});
