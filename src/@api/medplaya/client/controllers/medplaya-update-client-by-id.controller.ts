/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaUpdateClientByIdDto, MedplayaUpdateClientByIdHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/client/update')
export class MedplayaUpdateClientByIdController
{
    constructor(
        private readonly handler: MedplayaUpdateClientByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update client by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: MedplayaClientDto })
    async main(
        @Body() payload: MedplayaUpdateClientByIdDto,
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
