import { IsNotEmpty, IsString, IsOptional, IsInt, IsDateString } from "class-validator";

export class CreateAchievementDto {
      @IsString()
      @IsNotEmpty()
      title: string;
    
      @IsString()
      @IsOptional()
      description?: string;
    
      @IsDateString()
      date: string;
    
      @IsInt()
      @IsNotEmpty()
      userId: number;
}
