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
    return this.databaseService.activity.findMany({
        include: {
    class: true, 
  },
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.databaseService.activity.update({
      where: {
        id: id
      },
         data: updateActivityDto,
    })
  }

  remove(id: number) {
    return this.databaseService.activity.delete({
      where:{
        id:id
      }
    })
  }
}
