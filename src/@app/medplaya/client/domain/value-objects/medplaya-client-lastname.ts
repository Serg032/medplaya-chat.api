import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientLastname extends StringValueObject
{
    public readonly type: string = 'MedplayaClientLastname';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientLastname',
            nullable   : false,
            undefinable: false,
            maxLength  : 127,
        }, validationRules));
    }
}