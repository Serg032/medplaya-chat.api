import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { MedplayaSeeder } from './medplaya.seeder';
import { MedplayaModels, MedplayaHandlers, MedplayaServices, MedplayaRepositories, MedplayaSagas } from '../../@app/medplaya';
import { MedplayaClientApiControllers, MedplayaClientApiResolvers, MedplayaClientApiHandlers, MedplayaClientApiServices } from './client';
import { MedplayaMessageApiControllers, MedplayaMessageApiResolvers, MedplayaMessageApiHandlers, MedplayaMessageApiServices } from './message';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...MedplayaModels
            ])
    ],
    controllers: [
        ...MedplayaClientApiControllers,
        ...MedplayaMessageApiControllers
    ],
    providers: [
        MedplayaSeeder,
        ...MedplayaHandlers,
        ...MedplayaServices,
        ...MedplayaRepositories,
        ...MedplayaSagas,
        ...MedplayaClientApiResolvers,
        ...MedplayaClientApiHandlers,
        ...MedplayaClientApiServices,
        ...MedplayaMessageApiResolvers,
        ...MedplayaMessageApiHandlers,
        ...MedplayaMessageApiServices
    ],
})
export class MedplayaModule {}
