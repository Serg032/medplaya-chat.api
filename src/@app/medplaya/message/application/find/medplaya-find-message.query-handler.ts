import { MedplayaFindMessageQuery, MedplayaMessageMapper, MedplayaMessageResponse } from '@app/medplaya/message';
import { MedplayaFindMessageService } from '@app/medplaya/message/application/find/medplaya-find-message.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaFindMessageQuery)
export class MedplayaFindMessageQueryHandler implements IQueryHandler<MedplayaFindMessageQuery>
{
    private readonly mapper: MedplayaMessageMapper = new MedplayaMessageMapper();

    constructor(
        private readonly findMessageService: MedplayaFindMessageService,
    ) {}

    async execute(query: MedplayaFindMessageQuery): Promise<MedplayaMessageResponse>
    {
        const message = await this.findMessageService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(message);
    }
}
