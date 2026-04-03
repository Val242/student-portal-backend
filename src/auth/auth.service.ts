import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config'
import { json } from 'body-parser';

@Injectable()
export class AuthService {

    constructor(private readonly databaseService: DatabaseService,  private jwtService: JwtService){}
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
  async validateUser(email: string, password:string){
      const user = await this.databaseService.user.findFirst({
        where: {email}
      })
      if (!user){
        return new UnauthorizedException("Invalid email")
      }
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
      if(!isPasswordValid){
        throw new UnauthorizedException("Invalid Password")
      }
     
      return user;
  }

    async login(user: any) {
      try {
        const payload = {sub: user.id, email: user.email}
  
        const accessToken = this.jwtService.sign(payload,{
        expiresIn: '1h',
        secret: process.env.JWT_SECRET_KEY,
        },)
            
        const refreshToken = this.jwtService.sign(payload,{
        expiresIn: '7d',
        secret: process.env.JWT_SECRET_KEY,
        })   
           

        return{
        accessToken,
        refreshToken,
        // user:{
        //   id: user.id,
        //   email: user.email
        // }
        }}
         catch (error) {
        console.error(`The error is ${error}`)
        if (error.message.includes('secretOrPrivateKey must have a value')) {
        throw new HttpException(
          'Server configuration error: JWT secret is missing. Please contact admin.',
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
      }

}
     findUserById(id: number) {
    return this.databaseService.user.findUnique({
      where:{id}
    })
  }
}
