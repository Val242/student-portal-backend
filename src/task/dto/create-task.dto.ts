import { IsNotEmpty, IsString, IsOptional, IsInt, IsDateString } from "class-validator";

export class CreateTaskDto {
      @IsString()
      @IsNotEmpty()
      title: string;
    
      @IsString()
      @IsOptional()
      comments?: string;
    
      @IsDateString()
      dueDate: string;
    
      @IsInt()
      @IsNotEmpty()
      subjectId: number;
    
      @IsInt()
      @IsNotEmpty()
      classId: number;
}












// model Task {
//   id        Int      @id @default(autoincrement())
//   title     String
//   dueDate      DateTime
//   comments  String?
//   // status Status

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   subject   Subject  @relation(fields: [subjectId], references: [id])
//   subjectId Int
//   class   Class @relation(fields: [classId], references: [id])
//   classId Int

//   userTasks UserTask[]
// }