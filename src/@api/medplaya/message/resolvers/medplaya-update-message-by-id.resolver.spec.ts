/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaUpdateMessageByIdInput } from '@api/graphql';
import { MedplayaUpdateMessageByIdHandler, MedplayaUpdateMessageByIdResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaUpdateMessageByIdResolver', () =>
{
    let resolver: MedplayaUpdateMessageByIdResolver;
    let handler: MedplayaUpdateMessageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaUpdateMessageByIdResolver,
                {
                    provide : MedplayaUpdateMessageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaUpdateMessageByIdResolver>(MedplayaUpdateMessageByIdResolver);
        handler = module.get<MedplayaUpdateMessageByIdHandler>(MedplayaUpdateMessageByIdHandler);
    });

    test('MedplayaUpdateMessageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaUpdateMessageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a message by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(medplayaMockMessageData[0])));
            expect(await resolver.main(<MedplayaUpdateMessageByIdInput>medplayaMockMessageData[0])).toBe(medplayaMockMessageData[0]);
        });
    });
});
