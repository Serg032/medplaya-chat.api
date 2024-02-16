import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MedplayaMessageChatResponse extends StringValueObject
{
    public readonly type: string = 'MedplayaMessageChatResponse';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MedplayaMessageChatResponse',
            nullable   : false,
            undefinable: false,
            maxLength  : 2046,
        }, validationRules));
    }
}