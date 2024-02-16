import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IamTenantDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'IamTenantDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IamTenantDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}