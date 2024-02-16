/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateMessagesInput } from '@api/graphql';
import { MedplayaUpdateMessagesHandler, MedplayaUpdateMessagesResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessagesResolver', () =>
{
    let resolver: MedplayaUpdateMessagesResolver;
    let handler: MedplayaUpdateMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateMessagesResolver,
                {
                    provide : MedplayaUpdateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpdateMessagesResolver>(MedplayaUpdateMessagesResolver);
        handler = module.get<MedplayaUpdateMessagesHandler>(MedplayaUpdateMessagesHandler);
    });

    test('MedplayaUpdateMessagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a messages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(<MedplayaUpdateMessagesInput>medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
