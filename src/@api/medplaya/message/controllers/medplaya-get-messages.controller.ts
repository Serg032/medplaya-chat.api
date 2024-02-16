/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaGetMessagesHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/messages/get')
export class MedplayaGetMessagesController
{
    constructor(
        private readonly handler: MedplayaGetMessagesHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get messages according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [MedplayaMessageDto]})
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
