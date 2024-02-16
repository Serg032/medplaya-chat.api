import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaClientDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}