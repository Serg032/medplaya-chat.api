import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class MedplayaUpdateClientsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            name?: string;
            lastname?: string;
            username?: string;
            checkin?: string;
            checkout?: string;
            code?: string;
            room?: string;
            status?: string;
            tags?: string[];
            otherTags?: string[];
            isActive?: boolean;
            amount?: number;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
