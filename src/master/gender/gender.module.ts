import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { GenderController } from './gender.controller';
import { GenderProviders } from './gender.providers';
import { GenderService } from './gender.service';

@Module({
  controllers: [GenderController],
  exports: [GenderService, ...GenderProviders],
  providers: [GenderService, ...GenderProviders],
  imports: [SharedModule]
})
export class GenderModule {}
