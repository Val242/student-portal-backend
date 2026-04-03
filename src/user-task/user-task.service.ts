import { Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserTaskService {
  constructor (private readonly databaseService: DatabaseService){}
  create(createUserTaskDto: CreateUserTaskDto) {
    return 'This action adds a new userTask';
  }

  findAllUserTask(id:number) {
    return this.databaseService.userTask.findMany({
      where:{
        userId: id
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} userTask`;
  }

  update(id: number, updateUserTaskDto: UpdateUserTaskDto) {
    return this.databaseService.userTask.update({
      where:{
        id
      },
      data: updateUserTaskDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} userTask`;
  }
}
