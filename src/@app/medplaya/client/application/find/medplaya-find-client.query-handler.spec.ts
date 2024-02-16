import { MedplayaClientMapper, MedplayaFindClientQuery, MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaFindClientQueryHandler } from '@app/medplaya/client/application/find/medplaya-find-client.query-handler';
import { MedplayaFindClientService } from '@app/medplaya/client/application/find/medplaya-find-client.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientQueryHandler', () =>
{
    let queryHandler: MedplayaFindClientQueryHandler;
    let service: MedplayaFindClientService;
    let repository: MedplayaMockClientRepository;
    let mapper: MedplayaClientMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaFindClientQueryHandler,
                {
                    provide : MedplayaIClientRepository,
                    useClass: MedplayaMockClientRepository,
                },
                {
                    provide : MedplayaFindClientService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaFindClientQueryHandler>(MedplayaFindClientQueryHandler);
        service = module.get<MedplayaFindClientService>(MedplayaFindClientService);
        repository = <MedplayaMockClientRepository>module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
        mapper = new MedplayaClientMapper();
    });

    describe('main', () =>
    {
        test('MedplayaFindClientQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an client founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new MedplayaFindClientQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
