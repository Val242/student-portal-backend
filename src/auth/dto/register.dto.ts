import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    @MinLength(8)
    password:string;

    @IsString()
    @IsOptional()
    bio: string

    @IsNotEmpty()
    classId: number


}
