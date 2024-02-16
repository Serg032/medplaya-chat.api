import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class MedplayaUpdateMessagesCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            question?: string;
            chatResponse?: string;
            clientId?: string;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
