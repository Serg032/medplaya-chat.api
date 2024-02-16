/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaDeleteClientByIdHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/client/delete')
export class MedplayaDeleteClientByIdController
{
    constructor(
        private readonly handler: MedplayaDeleteClientByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete client by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: MedplayaClientDto })
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
