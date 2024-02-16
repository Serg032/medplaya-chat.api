import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientCheckout extends TimestampValueObject
{
    public readonly type: string = 'MedplayaClientCheckout';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientCheckout',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}