import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NoteService {

   constructor(private readonly databaseService: DatabaseService){}

  create(createNoteDto: CreateNoteDto) {
    return this.databaseService.note.create({
      data: createNoteDto
    })
  }



  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
