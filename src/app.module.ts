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
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DatabaseModule, SubjectModule, ScheduleItemModule, TaskModule, ActivityModule, NoteModule, UsersModule, ClassModule, AchievementModule, UserTaskModule, AuthModule,],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
