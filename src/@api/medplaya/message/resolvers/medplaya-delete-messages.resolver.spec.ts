/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaDeleteMessagesHandler, MedplayaDeleteMessagesResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaDeleteMessagesResolver', () =>
{
    let resolver: MedplayaDeleteMessagesResolver;
    let handler: MedplayaDeleteMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaDeleteMessagesResolver,
                {
                    provide : MedplayaDeleteMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaDeleteMessagesResolver>(MedplayaDeleteMessagesResolver);
        handler = module.get<MedplayaDeleteMessagesHandler>(MedplayaDeleteMessagesHandler);
    });

    test('MedplayaDeleteMessagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaDeleteMessagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an medplayaMockMessageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData)));
            expect(await resolver.main()).toBe(medplayaMockMessageData);
        });
    });
});
