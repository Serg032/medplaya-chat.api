import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaClientOtherTags extends JsonValueObject
{
    public readonly type: string = 'MedplayaClientOtherTags';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaClientOtherTags',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}