/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindClientHandler, MedplayaFindClientResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientResolver', () =>
{
    let resolver: MedplayaFindClientResolver;
    let handler: MedplayaFindClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindClientResolver,
                {
                    provide : MedplayaFindClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaFindClientResolver>(MedplayaFindClientResolver);
        handler = module.get<MedplayaFindClientHandler>(MedplayaFindClientHandler);
    });

    test('MedplayaFindClientResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindClientResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a client', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main()).toBe(medplayaMockClientData[0]);
        });
    });
});
