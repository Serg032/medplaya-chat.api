import { MedplayaPaginateClientsController, MedplayaPaginateClientsHandler } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateClientsController', () =>
{
    let controller: MedplayaPaginateClientsController;
    let handler: MedplayaPaginateClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaPaginateClientsController,
            ],
            providers: [
                {
                    provide : MedplayaPaginateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaPaginateClientsController>(MedplayaPaginateClientsController);
        handler = module.get<MedplayaPaginateClientsHandler>(MedplayaPaginateClientsHandler);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateClientsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a medplayaMockClientData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : medplayaMockClientData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : medplayaMockClientData,
            });
        });
    });
});
