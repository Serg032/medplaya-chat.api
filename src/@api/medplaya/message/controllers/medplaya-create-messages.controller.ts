/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaCreateMessageDto, MedplayaCreateMessagesHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/messages/create')
export class MedplayaCreateMessagesController
{
    constructor(
        private readonly handler: MedplayaCreateMessagesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create messages in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [MedplayaMessageDto]})
    @ApiBody({ type: [MedplayaCreateMessageDto]})
    async main(
        @Body() payload: MedplayaCreateMessageDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
