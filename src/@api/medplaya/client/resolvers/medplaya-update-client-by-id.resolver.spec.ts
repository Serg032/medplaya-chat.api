/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateClientByIdInput } from '@api/graphql';
import { MedplayaUpdateClientByIdHandler, MedplayaUpdateClientByIdResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateClientByIdResolver', () =>
{
    let resolver: MedplayaUpdateClientByIdResolver;
    let handler: MedplayaUpdateClientByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateClientByIdResolver,
                {
                    provide : MedplayaUpdateClientByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpdateClientByIdResolver>(MedplayaUpdateClientByIdResolver);
        handler = module.get<MedplayaUpdateClientByIdHandler>(MedplayaUpdateClientByIdHandler);
    });

    test('MedplayaUpdateClientByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateClientByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a client by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(<MedplayaUpdateClientByIdInput>medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
