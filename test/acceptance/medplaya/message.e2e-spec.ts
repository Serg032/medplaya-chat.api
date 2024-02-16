/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { MedplayaModule } from '@api/medplaya/medplaya.module';
import { MedplayaIMessageRepository, medplayaMockMessageData, MedplayaMockMessageSeeder } from '@app/medplaya/message';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('message', () =>
{
    let app: INestApplication;
    let messageRepository: MedplayaIMessageRepository;
    let messageSeeder: MedplayaMockMessageSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                MedplayaModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports   : [ConfigModule],
                    inject    : [ConfigService],
                    useFactory: (configService: ConfigService) =>
                    {
                        return {
                            dialect       : configService.get('TEST_DATABASE_DIALECT'),
                            storage       : configService.get('TEST_DATABASE_STORAGE'),
                            host          : configService.get('TEST_DATABASE_HOST'),
                            port          : +configService.get('TEST_DATABASE_PORT'),
                            username      : configService.get('TEST_DATABASE_USER'),
                            password      : configService.get('TEST_DATABASE_PASSWORD'),
                            database      : configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize   : configService.get('TEST_DATABASE_SYNCHRONIZE'),
                            logging       : configService.get('TEST_DATABASE_LOGGIN') === 'true' ? console.log : false,
                            autoLoadModels: true,
                            models        : [],
                        };
                    },
                }),
            ],
            providers: [
                MedplayaMockMessageSeeder,
            ],
        })
            .compile();

        mockData = medplayaMockMessageData;
        app = module.createNestApplication();
        messageRepository = module.get<MedplayaIMessageRepository>(MedplayaIMessageRepository);
        messageSeeder = module.get<MedplayaMockMessageSeeder>(MedplayaMockMessageSeeder);

        // seed mock data in memory database
        await messageRepository.insert(messageSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageId must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageQuestion property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                question: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageQuestion must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageChatResponse property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                chatResponse: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageChatResponse must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageClientId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                clientId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageClientId must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageId must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageQuestion property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                question: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageQuestion must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageChatResponse property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                chatResponse: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageChatResponse must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageClientId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                clientId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageClientId must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageClientId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                clientId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageClientId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageQuestion is too large, has a maximum length of 2046', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                question: '*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageQuestion is too large, has a maximum length of 2046');
            });
    });

    test('/REST:POST medplaya/message/create - Got 400 Conflict, MessageChatResponse is too large, has a maximum length of 2046', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                chatResponse: '*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaMessageChatResponse is too large, has a maximum length of 2046');
            });
    });


    test('/REST:POST medplaya/message/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST medplaya/messages/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/messages/paginate')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual({
                    total: messageSeeder.collectionResponse.length,
                    count: messageSeeder.collectionResponse.length,
                    rows : messageSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST medplaya/messages/get', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/messages/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    messageSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST medplaya/message/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: 'ecfb6a35-58f3-5642-abbc-e4624a2e4ea5',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST medplaya/message/create', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST medplaya/message/find', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:POST medplaya/message/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/find/aeeeb26c-35fd-5a43-b4ca-3876d3366718')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST medplaya/message/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/message/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT medplaya/message/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/medplaya/message/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '3bd03b68-2ec9-5367-ae73-92c4ac9361b5',
            })
            .expect(404);
    });

    test('/REST:PUT medplaya/message/update', () =>
    {
        return request(app.getHttpServer())
            .put('/medplaya/message/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:DELETE medplaya/message/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/medplaya/message/delete/da3a5219-ee3c-51ac-8806-d799397b83bc')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE medplaya/message/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/medplaya/message/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL medplayaCreateMessage - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaCreateMessageInput!)
                    {
                        medplayaCreateMessage (payload:$payload)
                        {
                            id
                            question
                            chatResponse
                            clientId
                        }
                    }
                `,
                variables:
                {
                    payload: _.omit(mockData[0], ['createdAt','updatedAt','deletedAt']),
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(409);
                expect(res.body.errors[0].extensions.originalError.message).toContain('already exist in database');
            });
    });

    test('/GraphQL medplayaPaginateMessages', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        medplayaPaginateMessages (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaPaginateMessages).toEqual({
                    total: messageSeeder.collectionResponse.length,
                    count: messageSeeder.collectionResponse.length,
                    rows : messageSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL medplayaGetMessages', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaGetMessages (query:$query)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then(res =>
            {
                for (const [index, value] of res.body.data.medplayaGetMessages.entries())
                {
                    expect(messageSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL medplayaCreateMessage', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaCreateMessageInput!)
                    {
                        medplayaCreateMessage (payload:$payload)
                        {
                            id
                            question
                            chatResponse
                            clientId
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaCreateMessage).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaFindMessage - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaFindMessage (query:$query)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: 'c980cc81-e857-5c92-bb07-64b862469e9d',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL medplayaFindMessage', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaFindMessage (query:$query)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaFindMessage.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaFindMessageById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        medplayaFindMessageById (id:$id)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '79c2698d-b4d4-59f9-b696-d7c334dabf29',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL medplayaFindMessageById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        medplayaFindMessageById (id:$id)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaFindMessageById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaUpdateMessageById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateMessageByIdInput!)
                    {
                        medplayaUpdateMessageById (payload:$payload)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: 'a6e30220-9934-5db8-8c76-dd3a8db3350d',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL medplayaUpdateMessageById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateMessageByIdInput!)
                    {
                        medplayaUpdateMessageById (payload:$payload)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaUpdateMessageById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaUpdateMessages', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateMessagesInput! $query: QueryStatement)
                    {
                        medplayaUpdateMessages (payload:$payload query:$query)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                    query: {
                        where: {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaUpdateMessages[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaDeleteMessageById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        medplayaDeleteMessageById (id:$id)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '30190ed7-c0d1-502e-a9a3-93155d9c2a3a',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL medplayaDeleteMessageById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        medplayaDeleteMessageById (id:$id)
                        {
                            id
                            question
                            chatResponse
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.medplayaDeleteMessageById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await messageRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
