import { MedplayaClientMapper, MedplayaGetClientsQuery, MedplayaIClientRepository, MedplayaMockClientRepository } from '@app/medplaya/client';
import { MedplayaGetClientsQueryHandler } from '@app/medplaya/client/application/get/medplaya-get-clients.query-handler';
import { MedplayaGetClientsService } from '@app/medplaya/client/application/get/medplaya-get-clients.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetClientsQueryHandler', () =>
{
    let queryHandler: MedplayaGetClientsQueryHandler;
    let service: MedplayaGetClientsService;
    let repository: MedplayaMockClientRepository;
    let mapper: MedplayaClientMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaGetClientsQueryHandler,
                {
                    provide : MedplayaIClientRepository,
                    useClass: MedplayaMockClientRepository,
                },
                {
                    provide : MedplayaGetClientsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaGetClientsQueryHandler>(MedplayaGetClientsQueryHandler);
        service = module.get<MedplayaGetClientsService>(MedplayaGetClientsService);
        repository = <MedplayaMockClientRepository>module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
        mapper = new MedplayaClientMapper();
    });

    describe('main', () =>
    {
        test('MedplayaGetClientsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an clients founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new MedplayaGetClientsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
