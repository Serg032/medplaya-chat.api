/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MedplayaDeleteMessagesHandler, MedplayaMessageDto } from '@api/medplaya/message';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[medplaya] message')
@Controller('medplaya/messages/delete')
export class MedplayaDeleteMessagesController
{
    constructor(
        private readonly handler: MedplayaDeleteMessagesHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete messages in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [MedplayaMessageDto]})
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
