import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('class')
// @UseGuards(JwtAuthGuard)
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAllClasses() {
    return this.classService.findAllClasses();
  }

  @Get(':id/users')
  getUserByClass(@Param('id') id: string) {
    return this.classService.getUsersByClass(+id);
  }

  @Get(':id/activity')
  getActivitiesByClass(@Param('id') id: string){
    return this.classService.getActivitiesByClass(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
