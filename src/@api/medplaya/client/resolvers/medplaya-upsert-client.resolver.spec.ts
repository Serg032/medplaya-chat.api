/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaUpsertClientHandler, MedplayaUpsertClientResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertClientResolver', () =>
{
    let resolver: MedplayaUpsertClientResolver;
    let handler: MedplayaUpsertClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpsertClientResolver,
                {
                    provide : MedplayaUpsertClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpsertClientResolver>(MedplayaUpsertClientResolver);
        handler = module.get<MedplayaUpsertClientHandler>(MedplayaUpsertClientHandler);
    });

    test('MedplayaUpsertClientResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpsertClientResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an client upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(<MedplayaUpdateClientByIdInput>medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
