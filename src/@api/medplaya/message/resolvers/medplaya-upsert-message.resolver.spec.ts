/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaUpsertMessageHandler, MedplayaUpsertMessageResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpsertMessageResolver', () =>
{
    let resolver: MedplayaUpsertMessageResolver;
    let handler: MedplayaUpsertMessageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpsertMessageResolver,
                {
                    provide : MedplayaUpsertMessageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpsertMessageResolver>(MedplayaUpsertMessageResolver);
        handler = module.get<MedplayaUpsertMessageHandler>(MedplayaUpsertMessageHandler);
    });

    test('MedplayaUpsertMessageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpsertMessageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an message upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(<MedplayaUpdateMessageByIdInput>medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
