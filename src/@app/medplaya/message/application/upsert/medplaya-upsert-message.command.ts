import { CQMetadata } from '@aurorajs.dev/core';

export class MedplayaUpsertMessageCommand
{
    constructor(
        public readonly payload: {
            id: string;
            question?: string;
            chatResponse?: string;
            clientId?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
