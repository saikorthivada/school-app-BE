import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ClassesController } from './classes.controller';
import { ClassesProvider } from './classes.provider';
import { ClassesService } from './classes.service';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, ...ClassesProvider],
  imports: [SharedModule]
})
export class ClassesModule {}
