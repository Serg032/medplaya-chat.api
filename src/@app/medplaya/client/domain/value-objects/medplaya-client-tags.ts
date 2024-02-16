import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientTags extends JsonValueObject
{
    public readonly type: string = 'MedplayaClientTags';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientTags',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}