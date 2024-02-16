import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageClientId extends UuidValueObject
{
    public readonly type: string = 'MedplayaMessageClientId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageClientId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}