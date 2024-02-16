import { MedplayaMessage } from '@api/graphql';
import { MedplayaMessageDto } from '@api/medplaya/message';
import { MedplayaFindMessageQuery } from '@app/medplaya/message';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaFindMessageHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        return await this.queryBus.ask(new MedplayaFindMessageQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
