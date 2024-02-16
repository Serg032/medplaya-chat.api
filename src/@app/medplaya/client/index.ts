// export commands
export { MedplayaCreateClientCommand } from './application/create/medplaya-create-client.command';
export { MedplayaCreateClientsCommand } from './application/create/medplaya-create-clients.command';
export { MedplayaUpdateClientByIdCommand } from './application/update/medplaya-update-client-by-id.command';
export { MedplayaUpdateClientsCommand } from './application/update/medplaya-update-clients.command';
export { MedplayaUpdateAndIncrementClientsCommand } from './application/update/medplaya-update-and-increment-clients.command';
export { MedplayaUpsertClientCommand } from './application/upsert/medplaya-upsert-client.command';
export { MedplayaDeleteClientByIdCommand } from './application/delete/medplaya-delete-client-by-id.command';
export { MedplayaDeleteClientsCommand } from './application/delete/medplaya-delete-clients.command';

// export queries
export { MedplayaPaginateClientsQuery } from './application/paginate/medplaya-paginate-clients.query';
export { MedplayaGetClientsQuery } from './application/get/medplaya-get-clients.query';
export { MedplayaFindClientQuery } from './application/find/medplaya-find-client.query';
export { MedplayaFindClientByIdQuery } from './application/find/medplaya-find-client-by-id.query';
export { MedplayaRawSQLClientsQuery } from './application/raw-sql/medplaya-raw-sql-clients.query';

// export mocks
export { medplayaMockClientData } from './infrastructure/mock/medplaya-mock-client.data';
export { MedplayaMockClientSeeder } from './infrastructure/mock/medplaya-mock-client.seeder';
export { MedplayaMockClientRepository } from './infrastructure/mock/medplaya-mock-client.repository';

// export events
export { MedplayaAddClientsContextEvent } from './application/events/medplaya-add-clients-context.event';
export { MedplayaCreatedClientsEvent } from './application/events/medplaya-created-clients.event';
export { MedplayaCreatedClientEvent } from './application/events/medplaya-created-client.event';
export { MedplayaDeletedClientsEvent } from './application/events/medplaya-deleted-clients.event';
export { MedplayaDeletedClientEvent } from './application/events/medplaya-deleted-client.event';
export { MedplayaUpdatedClientsEvent } from './application/events/medplaya-updated-clients.event';
export { MedplayaUpdatedClientEvent } from './application/events/medplaya-updated-client.event';
export { MedplayaUpdatedAndIncrementedClientsEvent } from './application/events/medplaya-updated-and-incremented-clients.event';
export { MedplayaUpdatedAndIncrementedClientEvent } from './application/events/medplaya-updated-and-incremented-client.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { MedplayaClient } from './domain/medplaya-client.aggregate';
export { MedplayaClientMapper } from './domain/medplaya-client.mapper';
export { MedplayaIClientRepository } from './domain/medplaya-client.repository';
export { MedplayaClientResponse } from './domain/medplaya-client.response';

// infrastructure
export { MedplayaClientModel } from './infrastructure/sequelize/medplaya-sequelize-client.model';
export { MedplayaSequelizeClientRepository } from './infrastructure/sequelize/medplaya-sequelize-client.repository';

// sagas
export { MedplayaClientSagas } from './application/sagas/medplaya-client.sagas';

// command handlers
import { MedplayaCreateClientCommandHandler } from './application/create/medplaya-create-client.command-handler';
import { MedplayaCreateClientsCommandHandler } from './application/create/medplaya-create-clients.command-handler';
import { MedplayaUpdateClientByIdCommandHandler } from './application/update/medplaya-update-client-by-id.command-handler';
import { MedplayaUpdateClientsCommandHandler } from './application/update/medplaya-update-clients.command-handler';
import { MedplayaUpdateAndIncrementClientsCommandHandler } from './application/update/medplaya-update-and-increment-clients.command-handler';
import { MedplayaUpsertClientCommandHandler } from './application/upsert/medplaya-upsert-client.command-handler';
import { MedplayaDeleteClientByIdCommandHandler } from './application/delete/medplaya-delete-client-by-id.command-handler';
import { MedplayaDeleteClientsCommandHandler } from './application/delete/medplaya-delete-clients.command-handler';

// query handlers
import { MedplayaPaginateClientsQueryHandler } from './application/paginate/medplaya-paginate-clients.query-handler';
import { MedplayaGetClientsQueryHandler } from './application/get/medplaya-get-clients.query-handler';
import { MedplayaFindClientQueryHandler } from './application/find/medplaya-find-client.query-handler';
import { MedplayaFindClientByIdQueryHandler } from './application/find/medplaya-find-client-by-id.query-handler';
import { MedplayaRawSQLClientsQueryHandler } from './application/raw-sql/medplaya-raw-sql-clients.query-handler';

// event handlers
import { MedplayaCreatedClientEventHandler } from './application/events/medplaya-created-client.event-handler';
import { MedplayaCreatedClientsEventHandler } from './application/events/medplaya-created-clients.event-handler';
import { MedplayaUpdatedClientEventHandler } from './application/events/medplaya-updated-client.event-handler';
import { MedplayaUpdatedClientsEventHandler } from './application/events/medplaya-updated-clients.event-handler';
import { MedplayaUpdatedAndIncrementedClientsEventHandler } from './application/events/medplaya-updated-and-incremented-clients.event-handler';
import { MedplayaDeletedClientEventHandler } from './application/events/medplaya-deleted-client.event-handler';
import { MedplayaDeletedClientsEventHandler } from './application/events/medplaya-deleted-clients.event-handler';

// services
import { MedplayaCreateClientService } from './application/create/medplaya-create-client.service';
import { MedplayaCreateClientsService } from './application/create/medplaya-create-clients.service';
import { MedplayaPaginateClientsService } from './application/paginate/medplaya-paginate-clients.service';
import { MedplayaGetClientsService } from './application/get/medplaya-get-clients.service';
import { MedplayaFindClientService } from './application/find/medplaya-find-client.service';
import { MedplayaFindClientByIdService } from './application/find/medplaya-find-client-by-id.service';
import { MedplayaRawSQLClientsService } from './application/raw-sql/medplaya-raw-sql-clients.service';
import { MedplayaUpdateClientByIdService } from './application/update/medplaya-update-client-by-id.service';
import { MedplayaUpdateClientsService } from './application/update/medplaya-update-clients.service';
import { MedplayaUpdateAndIncrementClientsService } from './application/update/medplaya-update-and-increment-clients.service';
import { MedplayaUpsertClientService } from './application/upsert/medplaya-upsert-client.service';
import { MedplayaDeleteClientByIdService } from './application/delete/medplaya-delete-client-by-id.service';
import { MedplayaDeleteClientsService } from './application/delete/medplaya-delete-clients.service';

export const MedplayaClientHandlers = [
    // commands
    MedplayaCreateClientCommandHandler,
    MedplayaCreateClientsCommandHandler,
    MedplayaUpdateClientByIdCommandHandler,
    MedplayaUpdateClientsCommandHandler,
    MedplayaUpdateAndIncrementClientsCommandHandler,
    MedplayaUpsertClientCommandHandler,
    MedplayaDeleteClientByIdCommandHandler,
    MedplayaDeleteClientsCommandHandler,

    // queries
    MedplayaPaginateClientsQueryHandler,
    MedplayaGetClientsQueryHandler,
    MedplayaFindClientQueryHandler,
    MedplayaFindClientByIdQueryHandler,
    MedplayaRawSQLClientsQueryHandler,

    // events
    MedplayaCreatedClientEventHandler,
    MedplayaCreatedClientsEventHandler,
    MedplayaUpdatedClientEventHandler,
    MedplayaUpdatedClientsEventHandler,
    MedplayaUpdatedAndIncrementedClientsEventHandler,
    MedplayaDeletedClientEventHandler,
    MedplayaDeletedClientsEventHandler,
];

export const MedplayaClientServices = [
    MedplayaCreateClientService,
    MedplayaCreateClientsService,
    MedplayaPaginateClientsService,
    MedplayaGetClientsService,
    MedplayaFindClientService,
    MedplayaFindClientByIdService,
    MedplayaRawSQLClientsService,
    MedplayaUpdateClientByIdService,
    MedplayaUpdateClientsService,
    MedplayaUpdateAndIncrementClientsService,
    MedplayaUpsertClientService,
    MedplayaDeleteClientByIdService,
    MedplayaDeleteClientsService,
];