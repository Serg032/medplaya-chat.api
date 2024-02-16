// export commands
export { MedplayaCreateMessageCommand } from './application/create/medplaya-create-message.command';
export { MedplayaCreateMessagesCommand } from './application/create/medplaya-create-messages.command';
export { MedplayaUpdateMessageByIdCommand } from './application/update/medplaya-update-message-by-id.command';
export { MedplayaUpdateMessagesCommand } from './application/update/medplaya-update-messages.command';
export { MedplayaUpdateAndIncrementMessagesCommand } from './application/update/medplaya-update-and-increment-messages.command';
export { MedplayaUpsertMessageCommand } from './application/upsert/medplaya-upsert-message.command';
export { MedplayaDeleteMessageByIdCommand } from './application/delete/medplaya-delete-message-by-id.command';
export { MedplayaDeleteMessagesCommand } from './application/delete/medplaya-delete-messages.command';

// export queries
export { MedplayaPaginateMessagesQuery } from './application/paginate/medplaya-paginate-messages.query';
export { MedplayaGetMessagesQuery } from './application/get/medplaya-get-messages.query';
export { MedplayaFindMessageQuery } from './application/find/medplaya-find-message.query';
export { MedplayaFindMessageByIdQuery } from './application/find/medplaya-find-message-by-id.query';
export { MedplayaRawSQLMessagesQuery } from './application/raw-sql/medplaya-raw-sql-messages.query';

// export mocks
export { medplayaMockMessageData } from './infrastructure/mock/medplaya-mock-message.data';
export { MedplayaMockMessageSeeder } from './infrastructure/mock/medplaya-mock-message.seeder';
export { MedplayaMockMessageRepository } from './infrastructure/mock/medplaya-mock-message.repository';

// export events
export { MedplayaAddMessagesContextEvent } from './application/events/medplaya-add-messages-context.event';
export { MedplayaCreatedMessagesEvent } from './application/events/medplaya-created-messages.event';
export { MedplayaCreatedMessageEvent } from './application/events/medplaya-created-message.event';
export { MedplayaDeletedMessagesEvent } from './application/events/medplaya-deleted-messages.event';
export { MedplayaDeletedMessageEvent } from './application/events/medplaya-deleted-message.event';
export { MedplayaUpdatedMessagesEvent } from './application/events/medplaya-updated-messages.event';
export { MedplayaUpdatedMessageEvent } from './application/events/medplaya-updated-message.event';
export { MedplayaUpdatedAndIncrementedMessagesEvent } from './application/events/medplaya-updated-and-incremented-messages.event';
export { MedplayaUpdatedAndIncrementedMessageEvent } from './application/events/medplaya-updated-and-incremented-message.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { MedplayaMessage } from './domain/medplaya-message.aggregate';
export { MedplayaMessageMapper } from './domain/medplaya-message.mapper';
export { MedplayaIMessageRepository } from './domain/medplaya-message.repository';
export { MedplayaMessageResponse } from './domain/medplaya-message.response';

// infrastructure
export { MedplayaMessageModel } from './infrastructure/sequelize/medplaya-sequelize-message.model';
export { MedplayaSequelizeMessageRepository } from './infrastructure/sequelize/medplaya-sequelize-message.repository';

// sagas
export { MedplayaMessageSagas } from './application/sagas/medplaya-message.sagas';

// command handlers
import { MedplayaCreateMessageCommandHandler } from './application/create/medplaya-create-message.command-handler';
import { MedplayaCreateMessagesCommandHandler } from './application/create/medplaya-create-messages.command-handler';
import { MedplayaUpdateMessageByIdCommandHandler } from './application/update/medplaya-update-message-by-id.command-handler';
import { MedplayaUpdateMessagesCommandHandler } from './application/update/medplaya-update-messages.command-handler';
import { MedplayaUpdateAndIncrementMessagesCommandHandler } from './application/update/medplaya-update-and-increment-messages.command-handler';
import { MedplayaUpsertMessageCommandHandler } from './application/upsert/medplaya-upsert-message.command-handler';
import { MedplayaDeleteMessageByIdCommandHandler } from './application/delete/medplaya-delete-message-by-id.command-handler';
import { MedplayaDeleteMessagesCommandHandler } from './application/delete/medplaya-delete-messages.command-handler';

// query handlers
import { MedplayaPaginateMessagesQueryHandler } from './application/paginate/medplaya-paginate-messages.query-handler';
import { MedplayaGetMessagesQueryHandler } from './application/get/medplaya-get-messages.query-handler';
import { MedplayaFindMessageQueryHandler } from './application/find/medplaya-find-message.query-handler';
import { MedplayaFindMessageByIdQueryHandler } from './application/find/medplaya-find-message-by-id.query-handler';
import { MedplayaRawSQLMessagesQueryHandler } from './application/raw-sql/medplaya-raw-sql-messages.query-handler';

// event handlers
import { MedplayaCreatedMessageEventHandler } from './application/events/medplaya-created-message.event-handler';
import { MedplayaCreatedMessagesEventHandler } from './application/events/medplaya-created-messages.event-handler';
import { MedplayaUpdatedMessageEventHandler } from './application/events/medplaya-updated-message.event-handler';
import { MedplayaUpdatedMessagesEventHandler } from './application/events/medplaya-updated-messages.event-handler';
import { MedplayaUpdatedAndIncrementedMessagesEventHandler } from './application/events/medplaya-updated-and-incremented-messages.event-handler';
import { MedplayaDeletedMessageEventHandler } from './application/events/medplaya-deleted-message.event-handler';
import { MedplayaDeletedMessagesEventHandler } from './application/events/medplaya-deleted-messages.event-handler';

// services
import { MedplayaCreateMessageService } from './application/create/medplaya-create-message.service';
import { MedplayaCreateMessagesService } from './application/create/medplaya-create-messages.service';
import { MedplayaPaginateMessagesService } from './application/paginate/medplaya-paginate-messages.service';
import { MedplayaGetMessagesService } from './application/get/medplaya-get-messages.service';
import { MedplayaFindMessageService } from './application/find/medplaya-find-message.service';
import { MedplayaFindMessageByIdService } from './application/find/medplaya-find-message-by-id.service';
import { MedplayaRawSQLMessagesService } from './application/raw-sql/medplaya-raw-sql-messages.service';
import { MedplayaUpdateMessageByIdService } from './application/update/medplaya-update-message-by-id.service';
import { MedplayaUpdateMessagesService } from './application/update/medplaya-update-messages.service';
import { MedplayaUpdateAndIncrementMessagesService } from './application/update/medplaya-update-and-increment-messages.service';
import { MedplayaUpsertMessageService } from './application/upsert/medplaya-upsert-message.service';
import { MedplayaDeleteMessageByIdService } from './application/delete/medplaya-delete-message-by-id.service';
import { MedplayaDeleteMessagesService } from './application/delete/medplaya-delete-messages.service';

export const MedplayaMessageHandlers = [
    // commands
    MedplayaCreateMessageCommandHandler,
    MedplayaCreateMessagesCommandHandler,
    MedplayaUpdateMessageByIdCommandHandler,
    MedplayaUpdateMessagesCommandHandler,
    MedplayaUpdateAndIncrementMessagesCommandHandler,
    MedplayaUpsertMessageCommandHandler,
    MedplayaDeleteMessageByIdCommandHandler,
    MedplayaDeleteMessagesCommandHandler,

    // queries
    MedplayaPaginateMessagesQueryHandler,
    MedplayaGetMessagesQueryHandler,
    MedplayaFindMessageQueryHandler,
    MedplayaFindMessageByIdQueryHandler,
    MedplayaRawSQLMessagesQueryHandler,

    // events
    MedplayaCreatedMessageEventHandler,
    MedplayaCreatedMessagesEventHandler,
    MedplayaUpdatedMessageEventHandler,
    MedplayaUpdatedMessagesEventHandler,
    MedplayaUpdatedAndIncrementedMessagesEventHandler,
    MedplayaDeletedMessageEventHandler,
    MedplayaDeletedMessagesEventHandler,
];

export const MedplayaMessageServices = [
    MedplayaCreateMessageService,
    MedplayaCreateMessagesService,
    MedplayaPaginateMessagesService,
    MedplayaGetMessagesService,
    MedplayaFindMessageService,
    MedplayaFindMessageByIdService,
    MedplayaRawSQLMessagesService,
    MedplayaUpdateMessageByIdService,
    MedplayaUpdateMessagesService,
    MedplayaUpdateAndIncrementMessagesService,
    MedplayaUpsertMessageService,
    MedplayaDeleteMessageByIdService,
    MedplayaDeleteMessagesService,
];