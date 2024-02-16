import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientIsActive extends BooleanValueObject
{
    public readonly type: string = 'MedplayaClientIsActive';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientIsActive',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}