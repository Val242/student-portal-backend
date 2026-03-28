import { Module } from '@nestjs/common';
import { ScheduleItemService } from './schedule-item.service';
import { ScheduleItemController } from './schedule-item.controller';

@Module({
  controllers: [ScheduleItemController],
  providers: [ScheduleItemService],
})
export class ScheduleItemModule {}
