import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientCheckin extends TimestampValueObject
{
    public readonly type: string = 'MedplayaClientCheckin';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientCheckin',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}