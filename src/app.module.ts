import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GenderModule } from './master/gender/gender.module';
import { RolesModule } from './master/roles/roles.module';
import { RequestResponseService } from './shared/services/request-response/request-response.service';

@Module({
  imports: [
    DatabaseModule,
    GenderModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService, RequestResponseService],
})
export class AppModule {}
