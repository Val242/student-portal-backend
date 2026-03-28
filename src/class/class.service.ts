import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassService {
    constructor(private readonly databaseService: DatabaseService){}

  create(createClassDto: CreateClassDto) {
    return this.databaseService.class.create({
      data: createClassDto
    })
  }

  getUsersByClass(id: number){
    return this.databaseService.class.findUnique({
      where:{
        id   
      },
      include:{
        students: true
      }
    })
  }

  findAllClasses() {
    return this.databaseService.class.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}


