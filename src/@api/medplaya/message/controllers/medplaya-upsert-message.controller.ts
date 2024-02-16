/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaMessageDto, MedplayaUpdateMessageByIdDto, MedplayaUpsertMessageHandler } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/message/upsert')
export class MedplayaUpsertMessageController
{
    constructor(
        private readonly handler: MedplayaUpsertMessageHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert message' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: MedplayaMessageDto })
    async main(
        @Body() payload: MedplayaUpdateMessageByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
