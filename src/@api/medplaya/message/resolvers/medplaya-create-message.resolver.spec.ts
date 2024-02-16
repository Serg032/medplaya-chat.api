/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaCreateMessageInput } from '@api/graphql';
import { MedplayaCreateMessageHandler, MedplayaCreateMessageResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaCreateMessageResolver', () =>
{
    let resolver: MedplayaCreateMessageResolver;
    let handler: MedplayaCreateMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaCreateMessageResolver,
                {
                    provide : MedplayaCreateMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaCreateMessageResolver>(MedplayaCreateMessageResolver);
        handler = module.get<MedplayaCreateMessageHandler>(MedplayaCreateMessageHandler);
    });

    test('MedplayaCreateMessageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaCreateMessageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an message created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(<MedplayaCreateMessageInput>medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
