import { CQMetadata } from '@aurorajs.dev/core';

export class MedplayaRawSQLMessagesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
