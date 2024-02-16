/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindClientByIdHandler, MedplayaFindClientByIdResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientByIdResolver', () =>
{
    let resolver: MedplayaFindClientByIdResolver;
    let handler: MedplayaFindClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindClientByIdResolver,
                {
                    provide : MedplayaFindClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaFindClientByIdResolver>(MedplayaFindClientByIdResolver);
        handler = module.get<MedplayaFindClientByIdHandler>(MedplayaFindClientByIdHandler);
    });

    test('MedplayaFindClientByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindClientByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an client by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(medplayaMockClientData[0].id)).toBe(medplayaMockClientData[0]);
        });
    });
});
