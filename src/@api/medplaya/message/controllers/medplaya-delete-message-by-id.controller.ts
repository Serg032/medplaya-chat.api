/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaDeleteMessageByIdHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/message/delete')
export class MedplayaDeleteMessageByIdController
{
    constructor(
        private readonly handler: MedplayaDeleteMessageByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete message by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: MedplayaMessageDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
