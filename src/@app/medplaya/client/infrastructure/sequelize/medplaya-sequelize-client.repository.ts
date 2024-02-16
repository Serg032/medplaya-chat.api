import { MedplayaClient, MedplayaClientMapper, MedplayaClientModel, MedplayaIClientRepository } from '@app/medplaya/client';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MedplayaSequelizeClientRepository extends SequelizeRepository<MedplayaClient, MedplayaClientModel> implements MedplayaIClientRepository
{
    public readonly aggregateName: string = 'MedplayaClient';
    public readonly mapper: MedplayaClientMapper = new MedplayaClientMapper();

    constructor(
        @InjectModel(MedplayaClientModel)
        public readonly repository: typeof MedplayaClientModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
