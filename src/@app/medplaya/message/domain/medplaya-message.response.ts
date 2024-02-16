import { MedplayaClientResponse } from '@app/medplaya/client';

export class MedplayaMessageResponse
{
    constructor(
        public readonly id: string,
        public readonly question: string,
        public readonly chatResponse: string,
        public readonly clientId: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly client: MedplayaClientResponse,
    ) {}
}
