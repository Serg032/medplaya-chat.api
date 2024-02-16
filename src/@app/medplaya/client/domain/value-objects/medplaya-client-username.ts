import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientUsername extends StringValueObject
{
    public readonly type: string = 'MedplayaClientUsername';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientUsername',
            nullable   : false,
            undefinable: false,
            maxLength  : 127,
        }, validationRules));
    }
}