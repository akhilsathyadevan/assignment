import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthDto } from "./dtos/auth.dto";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService,
    ){}
    @Post('/login')
    async createUSer(@Body() authData: AuthDto ){
        return this.authService.login(authData);
    }

}