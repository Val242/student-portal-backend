import { Injectable } from '@nestjs/common';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from './dto/update-schedule-item.dto';

@Injectable()
export class ScheduleItemService {
  create(createScheduleItemDto: CreateScheduleItemDto) {
    return 'This action adds a new scheduleItem';
  }

  findAll() {
    return `This action returns all scheduleItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduleItem`;
  }

  update(id: number, updateScheduleItemDto: UpdateScheduleItemDto) {
    return `This action updates a #${id} scheduleItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleItem`;
  }
}
