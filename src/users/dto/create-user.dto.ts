import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    bio: string

    @IsNotEmpty()
    classId: number


}
