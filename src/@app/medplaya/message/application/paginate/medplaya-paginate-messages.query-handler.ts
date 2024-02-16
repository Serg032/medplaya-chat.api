import { MedplayaPaginateMessagesQuery } from '@app/medplaya/message';
import { MedplayaPaginateMessagesService } from '@app/medplaya/message/application/paginate/medplaya-paginate-messages.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaPaginateMessagesQuery)
export class MedplayaPaginateMessagesQueryHandler implements IQueryHandler<MedplayaPaginateMessagesQuery>
{
    constructor(
        private readonly paginateMessagesService: MedplayaPaginateMessagesService,
    ) {}

    async execute(query: MedplayaPaginateMessagesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateMessagesService.main(
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
