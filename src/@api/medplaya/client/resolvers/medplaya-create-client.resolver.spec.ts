/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaCreateClientHandler, MedplayaCreateClientResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientResolver', () =>
{
    let resolver: MedplayaCreateClientResolver;
    let handler: MedplayaCreateClientHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaCreateClientResolver,
                {
                    provide : MedplayaCreateClientHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaCreateClientResolver>(MedplayaCreateClientResolver);
        handler = module.get<MedplayaCreateClientHandler>(MedplayaCreateClientHandler);
    });

    test('MedplayaCreateClientResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an client created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockClientData[0])));
            expect(await resolver.main(<MedplayaCreateClientInput>medplayaMockClientData[0])).toBe(medplayaMockClientData[0]);
        });
    });
});
