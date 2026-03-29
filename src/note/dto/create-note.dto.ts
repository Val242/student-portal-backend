import { IsNotEmpty, IsString, IsOptional, IsInt, IsDateString } from "class-validator";

export class CreateNoteDto {
      @IsString()
      @IsNotEmpty()
      title: string;
    
      @IsString()
      content: string;
    
      @IsDateString()
      date: string;
    
      @IsInt()
      @IsNotEmpty()
      userId: number;
}
