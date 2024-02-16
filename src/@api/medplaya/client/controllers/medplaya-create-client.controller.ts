/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaCreateClientDto, MedplayaCreateClientHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/client/create')
export class MedplayaCreateClientController
{
    constructor(
        private readonly handler: MedplayaCreateClientHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create client' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: MedplayaClientDto })
    async main(
        @Body() payload: MedplayaCreateClientDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
