import { MedplayaIClientRepository, MedplayaMockClientRepository, MedplayaPaginateClientsQuery } from '@app/medplaya/client';
import { MedplayaPaginateClientsQueryHandler } from '@app/medplaya/client/application/paginate/medplaya-paginate-clients.query-handler';
import { MedplayaPaginateClientsService } from '@app/medplaya/client/application/paginate/medplaya-paginate-clients.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateClientsQueryHandler', () =>
{
    let queryHandler: MedplayaPaginateClientsQueryHandler;
    let service: MedplayaPaginateClientsService;
    let repository: MedplayaMockClientRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaPaginateClientsQueryHandler,
                {
                    provide : MedplayaIClientRepository,
                    useClass: MedplayaMockClientRepository,
                },
                {
                    provide : MedplayaPaginateClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaPaginateClientsQueryHandler>(MedplayaPaginateClientsQueryHandler);
        service = module.get<MedplayaPaginateClientsService>(MedplayaPaginateClientsService);
        repository = <MedplayaMockClientRepository>module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateClientsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an clients paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new MedplayaPaginateClientsQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
