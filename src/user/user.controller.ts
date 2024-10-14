import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { CreateUSerDto } from "./dtos/user.dto";
import { UserService } from "./user.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}
    @Post()
    async createUSer(@Body() userData: CreateUSerDto){
        return this.userService.createUser(userData);  
    }

    @Get()
    @UseGuards(AuthGuard)
    async getAllUsers(@Query('page')page: number, @Query('limit')limit: number ){
        return this.userService.findAllUsers();
    }
}