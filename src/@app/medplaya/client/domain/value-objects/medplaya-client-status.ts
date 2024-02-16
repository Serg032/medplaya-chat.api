import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientStatus extends EnumValueObject
{
    public readonly type: string = 'MedplayaClientStatus';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientStatus',
            nullable   : true,
            undefinable: true,
            enumOptions: ['PENDDING','OK','NO_OK'],
        }, validationRules));
    }
}