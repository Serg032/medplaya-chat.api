import { MedplayaIMessageRepository, MedplayaMessageMapper, MedplayaMockMessageRepository, MedplayaRawSQLMessagesQuery } from '@app/medplaya/message';
import { MedplayaRawSQLMessagesQueryHandler } from '@app/medplaya/message/application/raw-sql/medplaya-raw-sql-messages.query-handler';
import { MedplayaRawSQLMessagesService } from '@app/medplaya/message/application/raw-sql/medplaya-raw-sql-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLMessagesQueryHandler', () =>
{
    let queryHandler: MedplayaRawSQLMessagesQueryHandler;
    let service: MedplayaRawSQLMessagesService;
    let repository: MedplayaMockMessageRepository;
    let mapper: MedplayaMessageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaRawSQLMessagesQueryHandler,
                {
                    provide : MedplayaIMessageRepository,
                    useClass: MedplayaMockMessageRepository,
                },
                {
                    provide : MedplayaRawSQLMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaRawSQLMessagesQueryHandler>(MedplayaRawSQLMessagesQueryHandler);
        service = module.get<MedplayaRawSQLMessagesService>(MedplayaRawSQLMessagesService);
        repository = <MedplayaMockMessageRepository>module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
        mapper = new MedplayaMessageMapper();
    });

    describe('main', () =>
    {
        test('MedplayaRawSQLMessagesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an messages founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new MedplayaRawSQLMessagesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
