import { MedplayaClientMapper, MedplayaClientResponse, MedplayaFindClientByIdQuery } from '@app/medplaya/client';
import { MedplayaFindClientByIdService } from '@app/medplaya/client/application/find/medplaya-find-client-by-id.service';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaFindClientByIdQuery)
export class MedplayaFindClientByIdQueryHandler implements IQueryHandler<MedplayaFindClientByIdQuery>
{
    private readonly mapper: MedplayaClientMapper = new MedplayaClientMapper();

    constructor(
        private readonly findClientByIdService: MedplayaFindClientByIdService,
    ) {}

    async execute(query: MedplayaFindClientByIdQuery): Promise<MedplayaClientResponse>
    {
        const client = await this.findClientByIdService.main(
            new MedplayaClientId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(client);
    }
}
