/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaMessageDto, MedplayaUpdateMessagesDto, MedplayaUpdateMessagesHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/messages/update')
export class MedplayaUpdateMessagesController
{
    constructor(
        private readonly handler: MedplayaUpdateMessagesHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update messages' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: MedplayaMessageDto })
    async main(
        @Body() payload: MedplayaUpdateMessagesDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
