/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class MedplayaUpdateMessageByIdDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'question [input here api field description]',
    })
    question?: string;

    @ApiProperty({
        type       : String,
        description: 'chatResponse [input here api field description]',
    })
    chatResponse?: string;

    @ApiProperty({
        type       : String,
        description: 'clientId [input here api field description]',
        example    : '467dc818-05a8-5053-9ec3-7ae4e2f225c0',
    })
    clientId?: string;

}
