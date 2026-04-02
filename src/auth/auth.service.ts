import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {

    constructor(private readonly databaseService: DatabaseService){}
    public async register(registerDto: RegisterDto){
        const {name, email , bio , classId , password} = registerDto

     const existingUser = await this.databaseService.user.findFirst({
      where: {email}
    });
    if(existingUser){
      throw new Error('User already exists')
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = this.databaseService.user.create({
        data:{
           name,
           email,
           bio,
           classId,
           passwordHash: hashedPassword
        },
    })

        if(!(await user).classId){
      return user
    }
    const tasks = await this.databaseService.task.findMany({
      where:{
        classId:(await user).classId
      },
      select:{
        id: true
      }
    })

     const userTaskData = tasks.map(async (task)=>
        ({
          userId: (await user).id,
          taskId: task.id
        })
    )

    await this.databaseService.userTask.createMany({
      data: await Promise.all(userTaskData)
    })

    return user;

    }

}
