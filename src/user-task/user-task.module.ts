import { Module } from '@nestjs/common';
import { UserTaskService } from './user-task.service';
import { UserTaskController } from './user-task.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserTaskController],
  providers: [UserTaskService],
})
export class UserTaskModule {}
