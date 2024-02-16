/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteMessageByIdHandler, MedplayaDeleteMessageByIdResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessageByIdResolver', () =>
{
    let resolver: MedplayaDeleteMessageByIdResolver;
    let handler: MedplayaDeleteMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteMessageByIdResolver,
                {
                    provide : MedplayaDeleteMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaDeleteMessageByIdResolver>(MedplayaDeleteMessageByIdResolver);
        handler = module.get<MedplayaDeleteMessageByIdHandler>(MedplayaDeleteMessageByIdHandler);
    });

    test('MedplayaDeleteMessageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an message deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(medplayaMockMessageData[0].id)).toBe(medplayaMockMessageData[0]);
        });
    });
});
