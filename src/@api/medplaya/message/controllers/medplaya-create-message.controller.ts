/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaCreateMessageDto, MedplayaCreateMessageHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/message/create')
export class MedplayaCreateMessageController
{
    constructor(
        private readonly handler: MedplayaCreateMessageHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create message' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: MedplayaMessageDto })
    async main(
        @Body() payload: MedplayaCreateMessageDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
