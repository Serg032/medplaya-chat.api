import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientAmount extends IntValueObject
{
    public readonly type: string = 'MedplayaClientAmount';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientAmount',
            nullable   : true,
            undefinable: true,
            unsigned   : false,
        }, validationRules));
    }
}