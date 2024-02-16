import { MedplayaFindMessageByIdQuery, MedplayaIMessageRepository, MedplayaMessageMapper, medplayaMockMessageData, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaFindMessageByIdQueryHandler } from '@app/medplaya/message/application/find/medplaya-find-message-by-id.query-handler';
import { MedplayaFindMessageByIdService } from '@app/medplaya/message/application/find/medplaya-find-message-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageByIdQueryHandler', () =>
{
    let queryHandler: MedplayaFindMessageByIdQueryHandler;
    let service: MedplayaFindMessageByIdService;
    let repository: MedplayaMockMessageRepository;
    let mapper: MedplayaMessageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaFindMessageByIdQueryHandler,
                {
                    provide : MedplayaIMessageRepository,
                    useClass: MedplayaMockMessageRepository,
                },
                {
                    provide : MedplayaFindMessageByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaFindMessageByIdQueryHandler>(MedplayaFindMessageByIdQueryHandler);
        service = module.get<MedplayaFindMessageByIdService>(MedplayaFindMessageByIdService);
        repository = <MedplayaMockMessageRepository>module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
        mapper = new MedplayaMessageMapper();
    });

    describe('main', () =>
    {
        test('FindMessageByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an message founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new MedplayaFindMessageByIdQuery(
                    medplayaMockMessageData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
