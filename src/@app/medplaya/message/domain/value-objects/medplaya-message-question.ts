import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageQuestion extends StringValueObject
{
    public readonly type: string = 'MedplayaMessageQuestion';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageQuestion',
            nullable   : false,
            undefinable: false,
            maxLength  : 2046,
        }, validationRules));
    }
}