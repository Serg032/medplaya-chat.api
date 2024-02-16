/* eslint-disable indent */
import { MedplayaClientStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class MedplayaCreateClientDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name: string;

    @ApiProperty({
        type       : String,
        description: 'lastname [input here api field description]',
    })
    lastname: string;

    @ApiProperty({
        type       : String,
        description: 'username [input here api field description]',
    })
    username: string;

    @ApiProperty({
        type       : String,
        description: 'checkin [input here api field description]',
    })
    checkin: string;

    @ApiProperty({
        type       : String,
        description: 'checkout [input here api field description]',
    })
    checkout: string;

    @ApiProperty({
        type       : String,
        description: 'code [input here api field description]',
    })
    code: string;

    @ApiProperty({
        type       : String,
        description: 'room [input here api field description]',
    })
    room: string;

    @ApiProperty({
        type       : MedplayaClientStatus,
        enum       : ['PENDDING','OK','NO_OK'],
        description: 'status [input here api field description]',
    })
    status?: MedplayaClientStatus;

    @ApiProperty({
        type       : Array,
        description: 'tags [input here api field description]',
    })
    tags?: string[];

    @ApiProperty({
        type       : Array,
        description: 'otherTags [input here api field description]',
    })
    otherTags?: string[];

    @ApiProperty({
        type       : Boolean,
        description: 'isActive [input here api field description]',
    })
    isActive: boolean;

    @ApiProperty({
        type       : Number,
        description: 'amount [input here api field description]',
    })
    amount?: number;

}
