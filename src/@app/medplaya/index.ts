import { MedplayaClientHandlers, MedplayaClientServices, MedplayaClientModel, MedplayaIClientRepository, MedplayaSequelizeClientRepository, MedplayaClientSagas } from './client';
import { MedplayaMessageHandlers, MedplayaMessageServices, MedplayaMessageModel, MedplayaIMessageRepository, MedplayaSequelizeMessageRepository, MedplayaMessageSagas } from './message';

export const MedplayaHandlers = [
    ...MedplayaClientHandlers,
    ...MedplayaMessageHandlers
];
export const MedplayaServices = [
    ...MedplayaClientServices,
    ...MedplayaMessageServices
];
export const MedplayaModels = [
    MedplayaClientModel,
    MedplayaMessageModel
];
export const MedplayaRepositories = [
    {
        provide : MedplayaIClientRepository,
        useClass: MedplayaSequelizeClientRepository
    },
    {
        provide : MedplayaIMessageRepository,
        useClass: MedplayaSequelizeMessageRepository
    }
];
export const MedplayaSagas = [
    MedplayaClientSagas,
    MedplayaMessageSagas
];
