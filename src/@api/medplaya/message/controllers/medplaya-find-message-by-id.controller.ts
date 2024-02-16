/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaFindMessageByIdHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/message/find')
export class MedplayaFindMessageByIdController
{
    constructor(
        private readonly handler: MedplayaFindMessageByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find message by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: MedplayaMessageDto })
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
