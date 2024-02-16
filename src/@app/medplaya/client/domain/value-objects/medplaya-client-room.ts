import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientRoom extends StringValueObject
{
    public readonly type: string = 'MedplayaClientRoom';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientRoom',
            nullable   : false,
            undefinable: false,
            maxLength  : 6,
        }, validationRules));
    }
}