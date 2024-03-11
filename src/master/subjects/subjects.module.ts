import { Module } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import {SubjectsProviders} from './subjects.providers';
import { SharedModule } from 'src/shared/shared.module';
@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, ...SubjectsProviders],
  imports: [SharedModule]
})
export class SubjectsModule {}
