import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SubjectModule } from './subject/subject.module';
import { ScheduleItemModule } from './schedule-item/schedule-item.module';
import { TaskModule } from './task/task.module';
import { ActivityModule } from './activity/activity.module';
import { NoteModule } from './note/note.module';
import { UsersModule } from './users/users.module';
import { ClassModule } from './class/class.module';
import { AchievementModule } from './achievement/achievement.module';
import { UserTaskModule } from './user-task/user-task.module';

@Module({
  imports: [DatabaseModule, SubjectModule, ScheduleItemModule, TaskModule, ActivityModule, NoteModule, UsersModule, ClassModule, AchievementModule, UserTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
