/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaClientDto, MedplayaFindClientHandler } from '@api/medplaya/client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] client')
@Controller('medplaya/client/find')
export class MedplayaFindClientController
{
    constructor(
        private readonly handler: MedplayaFindClientHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find client according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: MedplayaClientDto })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
