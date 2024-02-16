import { MedplayaFindMessageByIdQuery, MedplayaMessageMapper, MedplayaMessageResponse } from '@app/medplaya/message';
import { MedplayaFindMessageByIdService } from '@app/medplaya/message/application/find/medplaya-find-message-by-id.service';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaFindMessageByIdQuery)
export class MedplayaFindMessageByIdQueryHandler implements IQueryHandler<MedplayaFindMessageByIdQuery>
{
    private readonly mapper: MedplayaMessageMapper = new MedplayaMessageMapper();

    constructor(
        private readonly findMessageByIdService: MedplayaFindMessageByIdService,
    ) {}

    async execute(query: MedplayaFindMessageByIdQuery): Promise<MedplayaMessageResponse>
    {
        const message = await this.findMessageByIdService.main(
            new MedplayaMessageId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(message);
    }
}
