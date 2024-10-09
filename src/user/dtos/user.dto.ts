import { IsDefined, IsNumber, IsString } from "class-validator";

export class CreateUSerDto{
    @IsString()
    @IsDefined()
    firstname: string;

    @IsString()
    @IsDefined()
    lastName: string;

    @IsString()
    @IsDefined()
    email: string;

    @IsNumber()
    @IsDefined()
    phone: number;

    @IsString()
    @IsDefined()
    password: string;
}