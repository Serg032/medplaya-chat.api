import { MedplayaClientMapper, MedplayaIClientRepository, MedplayaMockClientRepository, MedplayaRawSQLClientsQuery } from '@app/medplaya/client';
import { MedplayaRawSQLClientsQueryHandler } from '@app/medplaya/client/application/raw-sql/medplaya-raw-sql-clients.query-handler';
import { MedplayaRawSQLClientsService } from '@app/medplaya/client/application/raw-sql/medplaya-raw-sql-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLClientsQueryHandler', () =>
{
    let queryHandler: MedplayaRawSQLClientsQueryHandler;
    let service: MedplayaRawSQLClientsService;
    let repository: MedplayaMockClientRepository;
    let mapper: MedplayaClientMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaRawSQLClientsQueryHandler,
                {
                    provide : MedplayaIClientRepository,
                    useClass: MedplayaMockClientRepository,
                },
                {
                    provide : MedplayaRawSQLClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaRawSQLClientsQueryHandler>(MedplayaRawSQLClientsQueryHandler);
        service = module.get<MedplayaRawSQLClientsService>(MedplayaRawSQLClientsService);
        repository = <MedplayaMockClientRepository>module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
        mapper = new MedplayaClientMapper();
    });

    describe('main', () =>
    {
        test('MedplayaRawSQLClientsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an clients founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new MedplayaRawSQLClientsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
