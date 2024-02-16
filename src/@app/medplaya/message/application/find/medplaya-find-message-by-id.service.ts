import { MedplayaIMessageRepository, MedplayaMessage } from '@app/medplaya/message';
import { MedplayaMessageId } from '@app/medplaya/message/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaFindMessageByIdService
{
    constructor(
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        id: MedplayaMessageId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<MedplayaMessage>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
