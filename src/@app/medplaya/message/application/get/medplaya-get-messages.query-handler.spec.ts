import { MedplayaGetMessagesQuery, MedplayaIMessageRepository, MedplayaMessageMapper, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaGetMessagesQueryHandler } from '@app/medplaya/message/application/get/medplaya-get-messages.query-handler';
import { MedplayaGetMessagesService } from '@app/medplaya/message/application/get/medplaya-get-messages.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetMessagesQueryHandler', () =>
{
    let queryHandler: MedplayaGetMessagesQueryHandler;
    let service: MedplayaGetMessagesService;
    let repository: MedplayaMockMessageRepository;
    let mapper: MedplayaMessageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaGetMessagesQueryHandler,
                {
                    provide : MedplayaIMessageRepository,
                    useClass: MedplayaMockMessageRepository,
                },
                {
                    provide : MedplayaGetMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaGetMessagesQueryHandler>(MedplayaGetMessagesQueryHandler);
        service = module.get<MedplayaGetMessagesService>(MedplayaGetMessagesService);
        repository = <MedplayaMockMessageRepository>module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
        mapper = new MedplayaMessageMapper();
    });

    describe('main', () =>
    {
        test('MedplayaGetMessagesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an messages founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new MedplayaGetMessagesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
