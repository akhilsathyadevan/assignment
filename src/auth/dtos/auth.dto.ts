import { IsDefined, IsString } from "class-validator";

export class AuthDto{
    @IsString()
    @IsDefined()
    username: string;

    @IsString()
    @IsDefined()
    password: string;

}