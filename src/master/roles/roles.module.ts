import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { RolesController } from './roles.controller';
import { ROLES_PROVIDERS } from './roles.providers';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, ...ROLES_PROVIDERS],
  imports: [SharedModule]
})
export class RolesModule {}
