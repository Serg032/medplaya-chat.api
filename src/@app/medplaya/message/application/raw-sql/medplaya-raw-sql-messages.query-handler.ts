import { MedplayaMessageMapper, MedplayaMessageResponse, MedplayaRawSQLMessagesQuery } from '@app/medplaya/message';
import { MedplayaRawSQLMessagesService } from '@app/medplaya/message/application/raw-sql/medplaya-raw-sql-messages.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaRawSQLMessagesQuery)
export class MedplayaRawSQLMessagesQueryHandler implements IQueryHandler<MedplayaRawSQLMessagesQuery>
{
    private readonly mapper: MedplayaMessageMapper = new MedplayaMessageMapper();

    constructor(
        private readonly rawSQLMessagesService: MedplayaRawSQLMessagesService,
    ) {}

    async execute(query: MedplayaRawSQLMessagesQuery): Promise<MedplayaMessageResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLMessagesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
