import { MedplayaClientMapper, MedplayaClientResponse, MedplayaRawSQLClientsQuery } from '@app/medplaya/client';
import { MedplayaRawSQLClientsService } from '@app/medplaya/client/application/raw-sql/medplaya-raw-sql-clients.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaRawSQLClientsQuery)
export class MedplayaRawSQLClientsQueryHandler implements IQueryHandler<MedplayaRawSQLClientsQuery>
{
    private readonly mapper: MedplayaClientMapper = new MedplayaClientMapper();

    constructor(
        private readonly rawSQLClientsService: MedplayaRawSQLClientsService,
    ) {}

    async execute(query: MedplayaRawSQLClientsQuery): Promise<MedplayaClientResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLClientsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
