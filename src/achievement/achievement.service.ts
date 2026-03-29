import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AchievementService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createAchievementDto: CreateAchievementDto) {
    return this.databaseService.achievement.create({
      data: createAchievementDto
    })
  }

  findAll() {
    return `This action returns all achievement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }

  update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return `This action updates a #${id} achievement`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievement`;
  }
}
