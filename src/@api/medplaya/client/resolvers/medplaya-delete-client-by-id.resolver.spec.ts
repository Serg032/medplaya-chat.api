/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteClientByIdHandler, MedplayaDeleteClientByIdResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientByIdResolver', () =>
{
    let resolver: MedplayaDeleteClientByIdResolver;
    let handler: MedplayaDeleteClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteClientByIdResolver,
                {
                    provide : MedplayaDeleteClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaDeleteClientByIdResolver>(MedplayaDeleteClientByIdResolver);
        handler = module.get<MedplayaDeleteClientByIdHandler>(MedplayaDeleteClientByIdHandler);
    });

    test('MedplayaDeleteClientByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an client deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(medplayaMockClientData[0].id)).toBe(medplayaMockClientData[0]);
        });
    });
});
