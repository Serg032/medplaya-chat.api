import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'MedplayaMessageUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}