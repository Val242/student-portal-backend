import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UploadedFile, BadRequestException, UseInterceptors, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private cloudinaryService:CloudinaryService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }


  // Get current logged-in user (Recommended)
  @Get('me')
  getMe(@CurrentUser() user: any) {
    return this.usersService.findOne(user.id);
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


@Patch('profile-picture')
@UseInterceptors(FileInterceptor('file'))
async updateProfilePic(
  @CurrentUser() currentUser: any,
  @UploadedFile() file: Express.Multer.File
) {
  if (!file) {
    throw new BadRequestException('File is required');
  }

  const uploaded = await this.cloudinaryService.uploadFile(file);

  return this.usersService.uploadProfilePic(
    currentUser.id, 
    uploaded.secure_url
  );
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }


}
