/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateClientsInput } from '@api/graphql';
import { MedplayaUpdateClientsHandler, MedplayaUpdateClientsResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientsResolver', () =>
{
    let resolver: MedplayaUpdateClientsResolver;
    let handler: MedplayaUpdateClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateClientsResolver,
                {
                    provide : MedplayaUpdateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpdateClientsResolver>(MedplayaUpdateClientsResolver);
        handler = module.get<MedplayaUpdateClientsHandler>(MedplayaUpdateClientsHandler);
    });

    test('MedplayaUpdateClientsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a clients updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(<MedplayaUpdateClientsInput>medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
