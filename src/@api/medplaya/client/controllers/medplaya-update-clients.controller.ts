/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaUpdateClientsDto, MedplayaUpdateClientsHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/clients/update')
export class MedplayaUpdateClientsController
{
    constructor(
        private readonly handler: MedplayaUpdateClientsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update clients' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: MedplayaClientDto })
    async main(
        @Body() payload: MedplayaUpdateClientsDto,
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
