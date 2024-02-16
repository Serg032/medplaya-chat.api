import { MedplayaClientMapper, MedplayaFindClientByIdQuery, MedplayaIClientRepository, medplayaMockClientData, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaFindClientByIdQueryHandler } from '@app/medplaya/client/application/find/medplaya-find-client-by-id.query-handler';
import { MedplayaFindClientByIdService } from '@app/medplaya/client/application/find/medplaya-find-client-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindClientByIdQueryHandler', () =>
{
    let queryHandler: MedplayaFindClientByIdQueryHandler;
    let service: MedplayaFindClientByIdService;
    let repository: MedplayaMockClientRepository;
    let mapper: MedplayaClientMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaFindClientByIdQueryHandler,
                {
                    provide : MedplayaIClientRepository,
                    useClass: MedplayaMockClientRepository,
                },
                {
                    provide : MedplayaFindClientByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaFindClientByIdQueryHandler>(MedplayaFindClientByIdQueryHandler);
        service = module.get<MedplayaFindClientByIdService>(MedplayaFindClientByIdService);
        repository = <MedplayaMockClientRepository>module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
        mapper = new MedplayaClientMapper();
    });

    describe('main', () =>
    {
        test('FindClientByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an client founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new MedplayaFindClientByIdQuery(
                    medplayaMockClientData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
