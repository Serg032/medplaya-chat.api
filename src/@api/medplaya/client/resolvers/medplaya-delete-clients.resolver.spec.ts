/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteClientsHandler, MedplayaDeleteClientsResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteClientsResolver', () =>
{
    let resolver: MedplayaDeleteClientsResolver;
    let handler: MedplayaDeleteClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteClientsResolver,
                {
                    provide : MedplayaDeleteClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaDeleteClientsResolver>(MedplayaDeleteClientsResolver);
        handler = module.get<MedplayaDeleteClientsHandler>(MedplayaDeleteClientsHandler);
    });

    test('MedplayaDeleteClientsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteClientsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an medplayaMockClientData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData)));
            expect(await resolver.main()).toBe(medplayaMockClientData);
        });
    });
});
