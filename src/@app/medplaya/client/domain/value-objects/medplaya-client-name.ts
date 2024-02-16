import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientName extends StringValueObject
{
    public readonly type: string = 'MedplayaClientName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientName',
            nullable   : false,
            undefinable: false,
            maxLength  : 127,
        }, validationRules));
    }
}