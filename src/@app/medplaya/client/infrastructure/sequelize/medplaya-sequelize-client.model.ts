/* eslint-disable indent */
/* eslint-disable key-spacing */
import { DataTypes } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'MedplayaClient',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['username'],
			unique: true,
		},
		{
			fields: ['code'],
			unique: true,
		},
		{
			fields: ['status'],
			unique: false,
		},

    ],
})
export class MedplayaClientModel extends Model<MedplayaClientModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(127),
    })
    name: string;

    @Column({
        field: 'lastname',
        allowNull: false,
        type: DataTypes.STRING(127),
    })
    lastname: string;

    @Column({
        field: 'username',
        allowNull: false,
        type: DataTypes.STRING(127),
    })
    username: string;

    @Column({
        field: 'checkin',
        allowNull: false,
        type: DataTypes.DATE,
    })
    checkin: string;

    @Column({
        field: 'checkout',
        allowNull: false,
        type: DataTypes.DATE,
    })
    checkout: string;

    @Column({
        field: 'code',
        allowNull: false,
        type: DataTypes.STRING(63),
    })
    code: string;

    @Column({
        field: 'room',
        allowNull: false,
        type: DataTypes.STRING(6),
    })
    room: string;

    @Column({
        field: 'status',
        allowNull: true,
        type: DataTypes.ENUM('PENDDING','OK','NO_OK'),
    })
    status: string;

    @Column({
        field: 'tags',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    tags: string[];

    @Column({
        field: 'otherTags',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.STRING(63)),
    })
    otherTags: string[];

    @Column({
        field: 'isActive',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    isActive: boolean;

    @Column({
        field: 'amount',
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    amount: number;

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
