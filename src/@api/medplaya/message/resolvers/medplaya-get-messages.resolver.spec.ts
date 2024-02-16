/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaGetMessagesHandler, MedplayaGetMessagesResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaGetMessagesResolver', () =>
{
    let resolver: MedplayaGetMessagesResolver;
    let handler: MedplayaGetMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaGetMessagesResolver,
                {
                    provide : MedplayaGetMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaGetMessagesResolver>(MedplayaGetMessagesResolver);
        handler = module.get<MedplayaGetMessagesHandler>(MedplayaGetMessagesHandler);
    });

    test('MedplayaGetMessagesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaGetMessagesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a medplayaMockMessageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData)));
            expect(await resolver.main()).toBe(medplayaMockMessageData);
        });
    });
});
