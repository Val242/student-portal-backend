import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SubjectService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createSubjectDto: CreateSubjectDto) {
    return this.databaseService.subject.create({
      data: createSubjectDto
    })
  }

  findAll() {
    return this.databaseService.subject.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.subject.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
