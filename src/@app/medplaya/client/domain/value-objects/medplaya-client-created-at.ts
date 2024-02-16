import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaClientCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}