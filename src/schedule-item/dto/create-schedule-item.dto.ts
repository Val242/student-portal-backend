import { IsDateString, IsInt, IsString } from "class-validator"

export class CreateScheduleItemDto {
    day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';

    @IsDateString()
    startTime: string;

    @IsDateString()
    endTime: string;

    @IsString()
    tutor: string;

    @IsString()
    location: string;

    @IsInt()
    subjectId: number
}
