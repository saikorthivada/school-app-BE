import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RequestResponseService } from './services/request-response/request-response.service';

@Module({
    imports: [DatabaseModule],
    exports: [
        DatabaseModule,
        RequestResponseService
    ],
    providers: [
        RequestResponseService,
    ]
})
export class SharedModule {}
