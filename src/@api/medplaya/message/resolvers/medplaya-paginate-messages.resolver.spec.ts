/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaPaginateMessagesHandler, MedplayaPaginateMessagesResolver } from '@api/medplaya/message';
import { medplayaMockMessageData } from '@app/medplaya/message';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateMessagesResolver', () =>
{
    let resolver: MedplayaPaginateMessagesResolver;
    let handler: MedplayaPaginateMessagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaPaginateMessagesResolver,
                {
                    provide : MedplayaPaginateMessagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaPaginateMessagesResolver>(MedplayaPaginateMessagesResolver);
        handler = module.get<MedplayaPaginateMessagesHandler>(MedplayaPaginateMessagesHandler);
    });

    test('MedplayaPaginateMessagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaPaginateMessagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a medplayaMockMessageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : medplayaMockMessageData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : medplayaMockMessageData,
            });
        });
    });
});
