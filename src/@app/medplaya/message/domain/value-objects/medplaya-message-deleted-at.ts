import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaMessageDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}