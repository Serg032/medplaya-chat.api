/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaCreateClientDto, MedplayaCreateClientsHandler } from '@api/medplaya/client';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/clients/create')
export class MedplayaCreateClientsController
{
    constructor(
        private readonly handler: MedplayaCreateClientsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create clients in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [MedplayaClientDto]})
    @ApiBody({ type: [MedplayaCreateClientDto]})
    async main(
        @Body() payload: MedplayaCreateClientDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
