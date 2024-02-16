/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaUpdateClientByIdDto, MedplayaUpsertClientHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/client/upsert')
export class MedplayaUpsertClientController
{
    constructor(
        private readonly handler: MedplayaUpsertClientHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert client' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: MedplayaClientDto })
    async main(
        @Body() payload: MedplayaUpdateClientByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
