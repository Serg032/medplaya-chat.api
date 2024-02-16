import { MedplayaIMessageRepository, MedplayaMessage, MedplayaMessageMapper, MedplayaMessageModel } from '@app/medplaya/message';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MedplayaSequelizeMessageRepository extends SequelizeRepository<MedplayaMessage, MedplayaMessageModel> implements MedplayaIMessageRepository
{
    public readonly aggregateName: string = 'MedplayaMessage';
    public readonly mapper: MedplayaMessageMapper = new MedplayaMessageMapper();

    constructor(
        @InjectModel(MedplayaMessageModel)
        public readonly repository: typeof MedplayaMessageModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
