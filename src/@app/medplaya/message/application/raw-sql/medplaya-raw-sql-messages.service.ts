import { MedplayaIMessageRepository, MedplayaMessage } from '@app/medplaya/message';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaRawSQLMessagesService
{
    constructor(
        private readonly repository: MedplayaIMessageRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<MedplayaMessage[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
