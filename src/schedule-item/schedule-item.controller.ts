import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleItemService } from './schedule-item.service';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from './dto/update-schedule-item.dto';

@Controller('schedule-item')
export class ScheduleItemController {
  constructor(private readonly scheduleItemService: ScheduleItemService) {}

  @Post()
  create(@Body() createScheduleItemDto: CreateScheduleItemDto) {
    return this.scheduleItemService.create(createScheduleItemDto);
  }

  @Get()
  findAll() {
    return this.scheduleItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleItemDto: UpdateScheduleItemDto) {
    return this.scheduleItemService.update(+id, updateScheduleItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleItemService.remove(+id);
  }
}
