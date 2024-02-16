/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaMessageDto, MedplayaUpdateMessageByIdDto, MedplayaUpdateMessageByIdHandler } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/message/update')
export class MedplayaUpdateMessageByIdController
{
    constructor(
        private readonly handler: MedplayaUpdateMessageByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update message by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: MedplayaMessageDto })
    async main(
        @Body() payload: MedplayaUpdateMessageByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
