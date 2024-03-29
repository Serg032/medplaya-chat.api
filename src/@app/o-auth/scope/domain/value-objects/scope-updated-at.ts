import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class ScopeUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ScopeUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ScopeUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}