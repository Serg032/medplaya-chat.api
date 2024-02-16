// export DTOs
export { MedplayaClientDto } from './dto/medplaya-client.dto';
export { MedplayaCreateClientDto } from './dto/medplaya-create-client.dto';
export { MedplayaUpdateClientByIdDto } from './dto/medplaya-update-client-by-id.dto';
export { MedplayaUpdateClientsDto } from './dto/medplaya-update-clients.dto';

// export handlers
export { MedplayaCreateClientHandler } from './handlers/medplaya-create-client.handler';
export { MedplayaCreateClientsHandler } from './handlers/medplaya-create-clients.handler';
export { MedplayaPaginateClientsHandler } from './handlers/medplaya-paginate-clients.handler';
export { MedplayaGetClientsHandler } from './handlers/medplaya-get-clients.handler';
export { MedplayaFindClientByIdHandler } from './handlers/medplaya-find-client-by-id.handler';
export { MedplayaFindClientHandler } from './handlers/medplaya-find-client.handler';
export { MedplayaUpdateClientByIdHandler } from './handlers/medplaya-update-client-by-id.handler';
export { MedplayaUpdateClientsHandler } from './handlers/medplaya-update-clients.handler';
export { MedplayaUpsertClientHandler } from './handlers/medplaya-upsert-client.handler';
export { MedplayaDeleteClientByIdHandler } from './handlers/medplaya-delete-client-by-id.handler';
export { MedplayaDeleteClientsHandler } from './handlers/medplaya-delete-clients.handler';

// export controllers
export { MedplayaCreateClientController } from './controllers/medplaya-create-client.controller';
export { MedplayaCreateClientsController } from './controllers/medplaya-create-clients.controller';
export { MedplayaPaginateClientsController } from './controllers/medplaya-paginate-clients.controller';
export { MedplayaGetClientsController } from './controllers/medplaya-get-clients.controller';
export { MedplayaFindClientByIdController } from './controllers/medplaya-find-client-by-id.controller';
export { MedplayaFindClientController } from './controllers/medplaya-find-client.controller';
export { MedplayaUpdateClientByIdController } from './controllers/medplaya-update-client-by-id.controller';
export { MedplayaUpdateClientsController } from './controllers/medplaya-update-clients.controller';
export { MedplayaUpsertClientController } from './controllers/medplaya-upsert-client.controller';
export { MedplayaDeleteClientByIdController } from './controllers/medplaya-delete-client-by-id.controller';
export { MedplayaDeleteClientsController } from './controllers/medplaya-delete-clients.controller';

// export resolvers
export { MedplayaCreateClientResolver } from './resolvers/medplaya-create-client.resolver';
export { MedplayaCreateClientsResolver } from './resolvers/medplaya-create-clients.resolver';
export { MedplayaPaginateClientsResolver } from './resolvers/medplaya-paginate-clients.resolver';
export { MedplayaGetClientsResolver } from './resolvers/medplaya-get-clients.resolver';
export { MedplayaFindClientByIdResolver } from './resolvers/medplaya-find-client-by-id.resolver';
export { MedplayaFindClientResolver } from './resolvers/medplaya-find-client.resolver';
export { MedplayaUpdateClientByIdResolver } from './resolvers/medplaya-update-client-by-id.resolver';
export { MedplayaUpdateClientsResolver } from './resolvers/medplaya-update-clients.resolver';
export { MedplayaUpsertClientResolver } from './resolvers/medplaya-upsert-client.resolver';
export { MedplayaDeleteClientByIdResolver } from './resolvers/medplaya-delete-client-by-id.resolver';
export { MedplayaDeleteClientsResolver } from './resolvers/medplaya-delete-clients.resolver';

// import controllers
import { MedplayaCreateClientController } from './controllers/medplaya-create-client.controller';
import { MedplayaCreateClientsController } from './controllers/medplaya-create-clients.controller';
import { MedplayaPaginateClientsController } from './controllers/medplaya-paginate-clients.controller';
import { MedplayaGetClientsController } from './controllers/medplaya-get-clients.controller';
import { MedplayaFindClientByIdController } from './controllers/medplaya-find-client-by-id.controller';
import { MedplayaFindClientController } from './controllers/medplaya-find-client.controller';
import { MedplayaUpdateClientByIdController } from './controllers/medplaya-update-client-by-id.controller';
import { MedplayaUpdateClientsController } from './controllers/medplaya-update-clients.controller';
import { MedplayaUpsertClientController } from './controllers/medplaya-upsert-client.controller';
import { MedplayaDeleteClientByIdController } from './controllers/medplaya-delete-client-by-id.controller';
import { MedplayaDeleteClientsController } from './controllers/medplaya-delete-clients.controller';

// import resolvers
import { MedplayaCreateClientResolver } from './resolvers/medplaya-create-client.resolver';
import { MedplayaCreateClientsResolver } from './resolvers/medplaya-create-clients.resolver';
import { MedplayaPaginateClientsResolver } from './resolvers/medplaya-paginate-clients.resolver';
import { MedplayaGetClientsResolver } from './resolvers/medplaya-get-clients.resolver';
import { MedplayaFindClientByIdResolver } from './resolvers/medplaya-find-client-by-id.resolver';
import { MedplayaFindClientResolver } from './resolvers/medplaya-find-client.resolver';
import { MedplayaUpdateClientByIdResolver } from './resolvers/medplaya-update-client-by-id.resolver';
import { MedplayaUpdateClientsResolver } from './resolvers/medplaya-update-clients.resolver';
import { MedplayaUpsertClientResolver } from './resolvers/medplaya-upsert-client.resolver';
import { MedplayaDeleteClientByIdResolver } from './resolvers/medplaya-delete-client-by-id.resolver';
import { MedplayaDeleteClientsResolver } from './resolvers/medplaya-delete-clients.resolver';

// import handlers
import { MedplayaCreateClientHandler } from './handlers/medplaya-create-client.handler';
import { MedplayaCreateClientsHandler } from './handlers/medplaya-create-clients.handler';
import { MedplayaPaginateClientsHandler } from './handlers/medplaya-paginate-clients.handler';
import { MedplayaGetClientsHandler } from './handlers/medplaya-get-clients.handler';
import { MedplayaFindClientByIdHandler } from './handlers/medplaya-find-client-by-id.handler';
import { MedplayaFindClientHandler } from './handlers/medplaya-find-client.handler';
import { MedplayaUpdateClientByIdHandler } from './handlers/medplaya-update-client-by-id.handler';
import { MedplayaUpdateClientsHandler } from './handlers/medplaya-update-clients.handler';
import { MedplayaUpsertClientHandler } from './handlers/medplaya-upsert-client.handler';
import { MedplayaDeleteClientByIdHandler } from './handlers/medplaya-delete-client-by-id.handler';
import { MedplayaDeleteClientsHandler } from './handlers/medplaya-delete-clients.handler';

// import seeder
import { MedplayaClientSeeder } from './seeder/medplaya-client.seeder';

export const MedplayaClientApiControllers = [
    MedplayaCreateClientController,
    MedplayaCreateClientsController,
    MedplayaPaginateClientsController,
    MedplayaGetClientsController,
    MedplayaFindClientByIdController,
    MedplayaFindClientController,
    MedplayaUpdateClientByIdController,
    MedplayaUpdateClientsController,
    MedplayaUpsertClientController,
    MedplayaDeleteClientByIdController,
    MedplayaDeleteClientsController,
];

export const MedplayaClientApiResolvers = [
    MedplayaCreateClientResolver,
    MedplayaCreateClientsResolver,
    MedplayaPaginateClientsResolver,
    MedplayaGetClientsResolver,
    MedplayaFindClientByIdResolver,
    MedplayaFindClientResolver,
    MedplayaUpdateClientByIdResolver,
    MedplayaUpdateClientsResolver,
    MedplayaUpsertClientResolver,
    MedplayaDeleteClientByIdResolver,
    MedplayaDeleteClientsResolver,
];

export const MedplayaClientApiHandlers = [
    MedplayaCreateClientHandler,
    MedplayaCreateClientsHandler,
    MedplayaPaginateClientsHandler,
    MedplayaGetClientsHandler,
    MedplayaFindClientByIdHandler,
    MedplayaFindClientHandler,
    MedplayaUpdateClientByIdHandler,
    MedplayaUpdateClientsHandler,
    MedplayaUpsertClientHandler,
    MedplayaDeleteClientByIdHandler,
    MedplayaDeleteClientsHandler,
];

export const MedplayaClientApiServices = [
    MedplayaClientSeeder,
];
