import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService){}
  
 async create(createUserDto: CreateUserDto) {
    const user = await this.databaseService.user.create({
      data: createUserDto
    })

    if(!user.classId){
      return user
    }
    const tasks = await this.databaseService.task.findMany({
      where:{
        classId: createUserDto.classId
      },
      select:{
        id: true
      }
    })

    const userTaskData = tasks.map((task)=>
        ({
          userId: user.id,
          taskId: task.id
        })
    )

    await this.databaseService.userTask.createMany({
      data: userTaskData
    })

    return user;
  }

    getNotesByUser(id: number){
    return this.databaseService.user.findUnique({
      where:{
        id
      },
      include:{
        notes: true
    }
    })
  }

    getAchievementsByUser(id: number){
    return this.databaseService.user.findUnique({
      where:{
        id
      },
      include:{
        achievements: true
    }
    })
  }

  findAll() {
    return this.databaseService.user.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where:{id}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}


