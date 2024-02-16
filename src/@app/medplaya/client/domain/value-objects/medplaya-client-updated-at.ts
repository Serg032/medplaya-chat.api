import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaClientUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}