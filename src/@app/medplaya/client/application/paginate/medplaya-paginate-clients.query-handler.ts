import { MedplayaPaginateClientsQuery } from '@app/medplaya/client';
import { MedplayaPaginateClientsService } from '@app/medplaya/client/application/paginate/medplaya-paginate-clients.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaPaginateClientsQuery)
export class MedplayaPaginateClientsQueryHandler implements IQueryHandler<MedplayaPaginateClientsQuery>
{
    constructor(
        private readonly paginateClientsService: MedplayaPaginateClientsService,
    ) {}

    async execute(query: MedplayaPaginateClientsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateClientsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
