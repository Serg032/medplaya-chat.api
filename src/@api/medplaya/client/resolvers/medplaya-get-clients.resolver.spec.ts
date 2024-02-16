/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaGetClientsHandler, MedplayaGetClientsResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetClientsResolver', () =>
{
    let resolver: MedplayaGetClientsResolver;
    let handler: MedplayaGetClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaGetClientsResolver,
                {
                    provide : MedplayaGetClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaGetClientsResolver>(MedplayaGetClientsResolver);
        handler = module.get<MedplayaGetClientsHandler>(MedplayaGetClientsHandler);
    });

    test('MedplayaGetClientsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaGetClientsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a medplayaMockClientData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData)));
            expect(await resolver.main()).toBe(medplayaMockClientData);
        });
    });
});
