/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { MedplayaModule } from '@api/medplaya/medplaya.module';
import { MedplayaIClientRepository, medplayaMockClientData, MedplayaMockClientSeeder } from '@app/medplaya/client';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('client', () =>
{
    let app: INestApplication;
    let clientRepository: MedplayaIClientRepository;
    let clientSeeder: MedplayaMockClientSeeder;

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
                MedplayaMockClientSeeder,
            ],
        })
            .compile();

        mockData = medplayaMockClientData;
        app = module.createNestApplication();
        clientRepository = module.get<MedplayaIClientRepository>(MedplayaIClientRepository);
        clientSeeder = module.get<MedplayaMockClientSeeder>(MedplayaMockClientSeeder);

        // seed mock data in memory database
        await clientRepository.insert(clientSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientId must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientName property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientName must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientLastname property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                lastname: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientLastname must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientUsername property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                username: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientUsername must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckin property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkin: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckin must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckout property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkout: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckout must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCode property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                code: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCode must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientRoom property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                room: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientRoom must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientIsActive property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isActive: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientIsActive must be defined, can not be null');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientId must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientName property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientName must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientLastname property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                lastname: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientLastname must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientUsername property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                username: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientUsername must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckin property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkin: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckin must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckout property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkout: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckout must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCode property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                code: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCode must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientRoom property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                room: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientRoom must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientIsActive property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isActive: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientIsActive must be defined, can not be undefined');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientName is too large, has a maximum length of 127', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: '********************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientName is too large, has a maximum length of 127');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientLastname is too large, has a maximum length of 127', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                lastname: '********************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientLastname is too large, has a maximum length of 127');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientUsername is too large, has a maximum length of 127', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                username: '********************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientUsername is too large, has a maximum length of 127');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCode is too large, has a maximum length of 63', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                code: '****************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCode is too large, has a maximum length of 63');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientRoom is too large, has a maximum length of 6', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                room: '*******',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientRoom is too large, has a maximum length of 6');
            });
    });

    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientAmount has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                amount: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientAmount has to be a integer value');
            });
    });
    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientIsActive has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isActive: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientIsActive has to be a boolean value');
            });
    });
    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientStatus has to be a enum option of PENDDING, OK, NO_OK', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                status: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientStatus has to be any of this options: PENDDING, OK, NO_OK');
            });
    });
    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckin has to be a timestamp value', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkin: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckin has to be a timestamp value');
            });
    });
    test('/REST:POST medplaya/client/create - Got 400 Conflict, ClientCheckout has to be a timestamp value', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                checkout: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for MedplayaClientCheckout has to be a timestamp value');
            });
    });

    test('/REST:POST medplaya/client/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST medplaya/clients/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/clients/paginate')
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
                    total: clientSeeder.collectionResponse.length,
                    count: clientSeeder.collectionResponse.length,
                    rows : clientSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST medplaya/clients/get', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/clients/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    clientSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST medplaya/client/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '603015e8-bc7c-550b-aba3-b12f32bb48ef',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST medplaya/client/create', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST medplaya/client/find', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/find')
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

    test('/REST:POST medplaya/client/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/find/b86d1eec-ec05-5f1b-9299-4a007488c018')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST medplaya/client/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/medplaya/client/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT medplaya/client/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/medplaya/client/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '8de26b2b-52aa-5869-af5f-af65d0c94d29',
            })
            .expect(404);
    });

    test('/REST:PUT medplaya/client/update', () =>
    {
        return request(app.getHttpServer())
            .put('/medplaya/client/update')
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

    test('/REST:DELETE medplaya/client/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/medplaya/client/delete/23639c8a-8663-5b81-a716-cb935db3511f')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE medplaya/client/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/medplaya/client/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL medplayaCreateClient - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaCreateClientInput!)
                    {
                        medplayaCreateClient (payload:$payload)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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

    test('/GraphQL medplayaPaginateClients', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        medplayaPaginateClients (query:$query constraint:$constraint)
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
                expect(res.body.data.medplayaPaginateClients).toEqual({
                    total: clientSeeder.collectionResponse.length,
                    count: clientSeeder.collectionResponse.length,
                    rows : clientSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL medplayaGetClients', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaGetClients (query:$query)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                for (const [index, value] of res.body.data.medplayaGetClients.entries())
                {
                    expect(clientSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL medplayaCreateClient', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaCreateClientInput!)
                    {
                        medplayaCreateClient (payload:$payload)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaCreateClient).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaFindClient - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaFindClient (query:$query)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                            id: '7005ed69-3e7a-5a58-9043-598cadbcaa7d',
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

    test('/GraphQL medplayaFindClient', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        medplayaFindClient (query:$query)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaFindClient.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaFindClientById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        medplayaFindClientById (id:$id)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'fa11db20-577e-566a-b2ff-e4e359a0970b',
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

    test('/GraphQL medplayaFindClientById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        medplayaFindClientById (id:$id)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaFindClientById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaUpdateClientById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateClientByIdInput!)
                    {
                        medplayaUpdateClientById (payload:$payload)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '4b62379e-cee8-5b14-9310-1d438014022b',
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

    test('/GraphQL medplayaUpdateClientById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateClientByIdInput!)
                    {
                        medplayaUpdateClientById (payload:$payload)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaUpdateClientById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaUpdateClients', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:MedplayaUpdateClientsInput! $query: QueryStatement)
                    {
                        medplayaUpdateClients (payload:$payload query:$query)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaUpdateClients[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL medplayaDeleteClientById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        medplayaDeleteClientById (id:$id)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'a44b98b5-f2a6-549d-9a93-5b8fae6f4bb4',
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

    test('/GraphQL medplayaDeleteClientById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        medplayaDeleteClientById (id:$id)
                        {
                            id
                            name
                            lastname
                            username
                            checkin
                            checkout
                            code
                            room
                            status
                            tags
                            otherTags
                            isActive
                            amount
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
                expect(res.body.data.medplayaDeleteClientById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await clientRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
