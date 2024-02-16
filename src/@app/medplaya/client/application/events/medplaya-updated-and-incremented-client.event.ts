export class MedplayaUpdatedAndIncrementedClientEvent
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly lastname: string,
        public readonly username: string,
        public readonly checkin: string,
        public readonly checkout: string,
        public readonly code: string,
        public readonly room: string,
        public readonly status: string,
        public readonly tags: string[],
        public readonly otherTags: string[],
        public readonly isActive: boolean,
        public readonly amount: number,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
