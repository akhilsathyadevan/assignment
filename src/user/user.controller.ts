import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUSerDto } from "./dtos/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}
    @Post()
    async createUSer(@Body() userData: CreateUSerDto){
        return this.userService.createUser(userData);  
    }

    @Get()
    async getAllUsers(){
        return this.userService.findAllUsers();
    }
}