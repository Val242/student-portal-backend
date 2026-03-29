import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsOptional()
    bio: string

    @IsNotEmpty()
    classId: number


}
