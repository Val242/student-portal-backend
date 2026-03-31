import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService){}

 async create(createTaskDto: CreateTaskDto) {
    const task = await this.databaseService.task.create({
      data: createTaskDto
    })

    const users = await this.databaseService.user.findMany({
    where: {
      classId: createTaskDto.classId,
    },
    select: {
      id: true,
    },
   });

    const userTasksData = users.map((user) => ({
    userId: user.id,
    taskId: task.id,
   
   }));

  await this.databaseService.userTask.createMany({
    data: userTasksData,
  });

  return task;

  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
