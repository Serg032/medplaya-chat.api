import { MedplayaClient, MedplayaIClientRepository } from '@app/medplaya/client';
import { MedplayaClientId } from '@app/medplaya/client/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedplayaFindClientByIdService
{
    constructor(
        private readonly repository: MedplayaIClientRepository,
    ) {}

    async main(
        id: MedplayaClientId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<MedplayaClient>
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
