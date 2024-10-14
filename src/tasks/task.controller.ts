import { Body, Controller, Get, Post, Query, Search, UseGuards } from "@nestjs/common";
import { TaskService } from "./task.service";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}
    @Post()
    @UseGuards(AuthGuard)
    async createUSer(@Body() userData: any){
        return this.taskService.createTask(userData);  
    }

    @Get()
    @UseGuards(AuthGuard)
    async getAllTasks(@Query('search') search: string,
        @Query('page') page: number,
        @Query('limit') limit: number,
         ) {
        return this.taskService.findAllTask(search);
    }
}