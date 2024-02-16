import { MedplayaFindMessageQuery, MedplayaIMessageRepository, MedplayaMessageMapper, MedplayaMockMessageRepository } from '@app/medplaya/message';
import { MedplayaFindMessageQueryHandler } from '@app/medplaya/message/application/find/medplaya-find-message.query-handler';
import { MedplayaFindMessageService } from '@app/medplaya/message/application/find/medplaya-find-message.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaFindMessageQueryHandler', () =>
{
    let queryHandler: MedplayaFindMessageQueryHandler;
    let service: MedplayaFindMessageService;
    let repository: MedplayaMockMessageRepository;
    let mapper: MedplayaMessageMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaFindMessageQueryHandler,
                {
                    provide : MedplayaIMessageRepository,
                    useClass: MedplayaMockMessageRepository,
                },
                {
                    provide : MedplayaFindMessageService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaFindMessageQueryHandler>(MedplayaFindMessageQueryHandler);
        service = module.get<MedplayaFindMessageService>(MedplayaFindMessageService);
        repository = <MedplayaMockMessageRepository>module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
        mapper = new MedplayaMessageMapper();
    });

    describe('main', () =>
    {
        test('MedplayaFindMessageQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an message founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new MedplayaFindMessageQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
