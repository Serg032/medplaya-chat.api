import { MedplayaMessage } from '@api/graphql';
import { MedplayaMessageDto } from '@api/medplaya/message';
import { MedplayaFindMessageByIdQuery } from '@app/medplaya/message';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaFindMessageByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<MedplayaMessage | MedplayaMessageDto>
    {
        return await this.queryBus.ask(new MedplayaFindMessageByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
