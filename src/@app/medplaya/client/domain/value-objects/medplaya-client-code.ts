import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientCode extends StringValueObject
{
    public readonly type: string = 'MedplayaClientCode';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientCode',
            nullable   : false,
            undefinable: false,
            maxLength  : 63,
        }, validationRules));
    }
}