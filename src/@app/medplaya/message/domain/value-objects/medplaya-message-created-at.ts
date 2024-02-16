import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaMessageCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}