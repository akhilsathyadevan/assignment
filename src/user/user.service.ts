import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./model/user.model";
import { Model } from "mongoose";
import { CreateUSerDto } from "./dtos/user.dto";

@Injectable()
export class UserService{
constructor(@InjectModel(User.name) private userModel: Model<User> ){}
async createUser(data: CreateUSerDto):Promise<User>{
    const existUser = await this.userModel.find({email:data.email});
    if(!existUser){
        return this.userModel.create(data);
    } else{
        throw new BadRequestException("email already exist");
    }
}

async findAllUsers(page: number = 1, limit: number = 10): Promise<{ users: User[], total: number, totalPages: number }> {
    const total = await this.userModel.countDocuments();
      const users = await this.userModel.find()
      .lean()
      .skip((page - 1) * limit)  
      .limit(limit);            
    const totalPages = Math.ceil(total / limit);
    return { users, total, totalPages };
  }
  

async findOne(username: string, password: string){
    return this.userModel.find({email: username , password: password}).lean();
}

}