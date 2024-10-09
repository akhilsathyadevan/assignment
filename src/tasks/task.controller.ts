import { Body, Controller, Get, Post, Query, Search } from "@nestjs/common";
import { TaskService } from "./task.service";


@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}
    @Post()
    async createUSer(@Body() userData: any){
        return this.taskService.createTask(userData);  
    }

    @Get()
    async getAllUsers(@Query('search') search : string){
        return this.taskService.findAllTask(search);
    }
}