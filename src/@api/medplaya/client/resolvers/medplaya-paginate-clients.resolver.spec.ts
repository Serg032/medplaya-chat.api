/* eslint-disable @typescript-eslint/no-unused-vars */
import { MedplayaPaginateClientsHandler, MedplayaPaginateClientsResolver } from '@api/medplaya/client';
import { medplayaMockClientData } from '@app/medplaya/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateClientsResolver', () =>
{
    let resolver: MedplayaPaginateClientsResolver;
    let handler: MedplayaPaginateClientsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MedplayaPaginateClientsResolver,
                {
                    provide : MedplayaPaginateClientsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MedplayaPaginateClientsResolver>(MedplayaPaginateClientsResolver);
        handler = module.get<MedplayaPaginateClientsHandler>(MedplayaPaginateClientsHandler);
    });

    test('MedplayaPaginateClientsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MedplayaPaginateClientsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a medplayaMockClientData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : medplayaMockClientData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : medplayaMockClientData,
            });
        });
    });
});
