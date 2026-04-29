import { IsNotEmpty, IsString, IsOptional, IsInt, IsDateString } from "class-validator";

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsDateString()
  date: string;

  @IsInt()
  @IsNotEmpty()
  classId: number;
}