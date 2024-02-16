import { MedplayaGetMessagesQuery, MedplayaMessageMapper, MedplayaMessageResponse } from '@app/medplaya/message';
import { MedplayaGetMessagesService } from '@app/medplaya/message/application/get/medplaya-get-messages.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(MedplayaGetMessagesQuery)
export class MedplayaGetMessagesQueryHandler implements IQueryHandler<MedplayaGetMessagesQuery>
{
    private readonly mapper: MedplayaMessageMapper = new MedplayaMessageMapper();

    constructor(
        private readonly getMessagesService: MedplayaGetMessagesService,
    ) {}

    async execute(query: MedplayaGetMessagesQuery): Promise<MedplayaMessageResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getMessagesService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
