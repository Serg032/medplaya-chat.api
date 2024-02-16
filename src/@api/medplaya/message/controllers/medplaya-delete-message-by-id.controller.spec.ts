/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteMessageByIdController, MedplayaDeleteMessageByIdHandler } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessageByIdController', () =>
{
    let controller: MedplayaDeleteMessageByIdController;
    let handler: MedplayaDeleteMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MedplayaDeleteMessageByIdController,
            ],
            providers: [
                {
                    provide : MedplayaDeleteMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MedplayaDeleteMessageByIdController>(MedplayaDeleteMessageByIdController);
        handler = module.get<MedplayaDeleteMessageByIdHandler>(MedplayaDeleteMessageByIdHandler);
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessageByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an message deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await controller.main(medplayaMockMessageData[0].id)).toBe(medplayaMockMessageData[0]);
        });
    });
});
