/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindMessageByIdHandler, MedplayaFindMessageByIdResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageByIdResolver', () =>
{
    let resolver: MedplayaFindMessageByIdResolver;
    let handler: MedplayaFindMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindMessageByIdResolver,
                {
                    provide : MedplayaFindMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaFindMessageByIdResolver>(MedplayaFindMessageByIdResolver);
        handler = module.get<MedplayaFindMessageByIdHandler>(MedplayaFindMessageByIdHandler);
    });

    test('MedplayaFindMessageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an message by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(medplayaMockMessageData[0].id)).toBe(medplayaMockMessageData[0]);
        });
    });
});
