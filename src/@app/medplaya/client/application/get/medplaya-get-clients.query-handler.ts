import { MedplayaClientMapper, MedplayaClientResponse, MedplayaGetClientsQuery } from '@app/medplaya/client';
import { MedplayaGetClientsService } from '@app/medplaya/client/application/get/medplaya-get-clients.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaGetClientsQuery)
export class MedplayaGetClientsQueryHandler implements IQueryHandler<MedplayaGetClientsQuery>
{
    private readonly mapper: MedplayaClientMapper = new MedplayaClientMapper();

    constructor(
        private readonly getClientsService: MedplayaGetClientsService,
    ) {}

    async execute(query: MedplayaGetClientsQuery): Promise<MedplayaClientResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getClientsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
