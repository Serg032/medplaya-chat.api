import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { CoreModule } from './@aurora/core.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';
import { MedplayaModule } from './@api/medplaya/medplaya.module';

@Module({
    imports: [
        CoreModule,
        OAuthModule,
        IamModule,
        MedplayaModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
