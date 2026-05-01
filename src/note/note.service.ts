import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { DatabaseService } from 'src/database/database.service';
import { SearchNoteDto } from './dto/search-notes.dto';

@Injectable()
export class NoteService {

   constructor(private readonly databaseService: DatabaseService){}

  create(createNoteDto: CreateNoteDto) {
    return this.databaseService.note.create({
      data: createNoteDto
    })
  }



  findAll() {
    return this.databaseService.note.findMany({
    })
  }

    async search(searchNoteDto: SearchNoteDto) {
      return this.databaseService.note.findMany({
        where: {
          title: {
            contains: searchNoteDto.title,
            mode: 'insensitive',
          },
        },
      });
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
