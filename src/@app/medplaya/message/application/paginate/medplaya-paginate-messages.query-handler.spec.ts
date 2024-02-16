import { MedplayaIMessageRepository, MedplayaMockMessageRepository, MedplayaPaginateMessagesQuery } from '@app/medplaya/message';
import { MedplayaPaginateMessagesQueryHandler } from '@app/medplaya/message/application/paginate/medplaya-paginate-messages.query-handler';
import { MedplayaPaginateMessagesService } from '@app/medplaya/message/application/paginate/medplaya-paginate-messages.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedplayaPaginateMessagesQueryHandler', () =>
{
    let queryHandler: MedplayaPaginateMessagesQueryHandler;
    let service: MedplayaPaginateMessagesService;
    let repository: MedplayaMockMessageRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MedplayaPaginateMessagesQueryHandler,
                {
                    provide : MedplayaIMessageRepository,
                    useClass: MedplayaMockMessageRepository,
                },
                {
                    provide : MedplayaPaginateMessagesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<MedplayaPaginateMessagesQueryHandler>(MedplayaPaginateMessagesQueryHandler);
        service = module.get<MedplayaPaginateMessagesService>(MedplayaPaginateMessagesService);
        repository = <MedplayaMockMessageRepository>module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
    });

    describe('main', () =>
    {
        test('MedplayaPaginateMessagesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an messages paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new MedplayaPaginateMessagesQuery(
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
