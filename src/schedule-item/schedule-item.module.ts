import { Module } from '@nestjs/common';
import { ScheduleItemService } from './schedule-item.service';
import { ScheduleItemController } from './schedule-item.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ScheduleItemController],
  providers: [ScheduleItemService],
})
export class ScheduleItemModule {}
