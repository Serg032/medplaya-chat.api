import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageId extends UuidValueObject
{
    public readonly type: string = 'MedplayaMessageId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}