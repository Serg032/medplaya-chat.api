/* eslint-disable @typescript-eslint/ban-types */
import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthenticationDisabledAdapterGuard, AuthorizationDisabledAdapterGuard, Permissions } from '@aurorajs.dev/core';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';

export function Auth(...permissions: string[]): Function
{
    return applyDecorators(
        Permissions(...permissions),
        UseGuards(AuthenticationJwtGuard, AuthorizationPermissionsGuard),
    );
}