import { Injectable } from '@nestjs/common';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from './dto/update-schedule-item.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ScheduleItemService {
  constructor(private readonly databaseService: DatabaseService){}
  
  create(createScheduleItemDto: CreateScheduleItemDto) {
    return this.databaseService.scheduleItem.create({
      data: createScheduleItemDto
    })
  }

  findAll() {
    return this.databaseService.scheduleItem.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.scheduleItem.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateScheduleItemDto: UpdateScheduleItemDto) {
    return `This action updates a #${id} scheduleItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleItem`;
  }
}
