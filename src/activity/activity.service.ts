import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ActivityService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createActivityDto: CreateActivityDto) {
    return this.databaseService.activity.create({
      data: createActivityDto
    })
  }

  findAll() {
    return this,this.databaseService.activity.findMany({
      
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
