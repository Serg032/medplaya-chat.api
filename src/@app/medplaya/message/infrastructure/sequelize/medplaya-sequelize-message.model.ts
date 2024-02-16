/* eslint-disable indent */
/* eslint-disable key-spacing */
import { MedplayaClientModel } from '@app/medplaya/client';
import { DataTypes } from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'MedplayaMessage',
    freezeTableName: true,
    timestamps: false,
})
export class MedplayaMessageModel extends Model<MedplayaMessageModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'question',
        allowNull: false,
        type: DataTypes.STRING(2046),
    })
    question: string;

    @Column({
        field: 'chatResponse',
        allowNull: false,
        type: DataTypes.STRING(2046),
    })
    chatResponse: string;

    @ForeignKey(() => MedplayaClientModel)
    @Column({
        field: 'clientId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    clientId: string;

    @BelongsTo(() => MedplayaClientModel, {
        constraints: false,
        foreignKey: 'clientId',
    })
    client: MedplayaClientModel;

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}
