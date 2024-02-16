import { MedplayaCreateClientInput } from '@api/graphql';
import { MedplayaCreateClientsHandler, MedplayaCreateClientsResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateClientsResolver', () =>
{
    let resolver: MedplayaCreateClientsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateClientsResolver,
                {
                    provide : MedplayaCreateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaCreateClientsResolver>(MedplayaCreateClientsResolver);
    });

    test('MedplayaCreateClientsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaCreateClientsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an clients created', async () =>
        {
            expect(await resolver.main(<MedplayaCreateClientInput[]>medplayaMockClientData)).toBe(undefined);
        });
    });
});
