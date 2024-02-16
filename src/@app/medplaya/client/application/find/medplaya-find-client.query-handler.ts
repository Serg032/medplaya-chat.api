import { MedplayaClientMapper, MedplayaClientResponse, MedplayaFindClientQuery } from '@app/medplaya/client';
import { MedplayaFindClientService } from '@app/medplaya/client/application/find/medplaya-find-client.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaFindClientQuery)
export class MedplayaFindClientQueryHandler implements IQueryHandler<MedplayaFindClientQuery>
{
    private readonly mapper: MedplayaClientMapper = new MedplayaClientMapper();

    constructor(
        private readonly findClientService: MedplayaFindClientService,
    ) {}

    async execute(query: MedplayaFindClientQuery): Promise<MedplayaClientResponse>
    {
        const client = await this.findClientService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(client);
    }
}
