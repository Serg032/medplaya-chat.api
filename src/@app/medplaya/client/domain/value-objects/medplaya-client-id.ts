import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientId extends UuidValueObject
{
    public readonly type: string = 'MedplayaClientId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}