import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "./model/task.model";

@Injectable()
export class TaskService{
constructor(@InjectModel(Task.name) private TaskModel: Model<Task> ){}
async createTask(data: any){
    const task = await this.TaskModel.create(data);
    return task;   
}

async findAllTask(search: string):Promise<Task[]>{
    const query = {};
    if (search) {
      query['taskStatus'] = { $regex: search, $options: 'i' }; 
    }
    return this.TaskModel.find(query).lean();
}


}