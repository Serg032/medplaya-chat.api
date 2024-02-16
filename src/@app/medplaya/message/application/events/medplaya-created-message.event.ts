export class MedplayaCreatedMessageEvent
{
    constructor(
        public readonly id: string,
        public readonly question: string,
        public readonly chatResponse: string,
        public readonly clientId: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
