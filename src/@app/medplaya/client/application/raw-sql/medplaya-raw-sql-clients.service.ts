import { MedplayaClient, MedplayaIClientRepository } from '@app/medplaya/client';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaRawSQLClientsService
{
    constructor(
        private readonly repository: MedplayaIClientRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<MedplayaClient[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
