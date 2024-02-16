import { MedplayaCreateMessageInput } from '@api/graphql';
import { MedplayaCreateMessagesHandler, MedplayaCreateMessagesResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessagesResolver', () =>
{
    let resolver: MedplayaCreateMessagesResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaCreateMessagesResolver,
                {
                    provide : MedplayaCreateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaCreateMessagesResolver>(MedplayaCreateMessagesResolver);
    });

    test('MedplayaCreateMessagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an messages created', async () =>
        {
            expect(await resolver.main(<MedplayaCreateMessageInput[]>medplayaMockMessageData)).toBe(undefined);
        });
    });
});
