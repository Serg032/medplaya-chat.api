/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaFindMessageHandler, MedplayaFindMessageResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageResolver', () =>
{
    let resolver: MedplayaFindMessageResolver;
    let handler: MedplayaFindMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaFindMessageResolver,
                {
                    provide : MedplayaFindMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaFindMessageResolver>(MedplayaFindMessageResolver);
        handler = module.get<MedplayaFindMessageHandler>(MedplayaFindMessageHandler);
    });

    test('MedplayaFindMessageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a message', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main()).toBe(medplayaMockMessageData[0]);
        });
    });
});
