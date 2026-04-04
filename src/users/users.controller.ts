import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UploadedFile, BadRequestException, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private cloudinaryService:CloudinaryService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/notes')
  getNotesByUser(@Param('id') id: string) {
    return this.usersService.getNotesByUser(+id);
  }

  @Get(':id/achievements')
  getAchievementsByUser(@Param('id') id: string) {
    return this.usersService.getAchievementsByUser(+id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id/profile-picture')
@Patch(':id/profile-picture')
@UseInterceptors(FileInterceptor('file'))
async updateProfilePic(
  @Param('id') id: string,
  @UploadedFile() file: Express.Multer.File
) {
  if (!file) {
    throw new BadRequestException('File is required');
  }

  const uploaded = await this.cloudinaryService.uploadFile(file);

  return this.usersService.UploadProfilePic(
    +id,
    uploaded.secure_url // ✅ THIS is what matters
  );
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
