import { BadRequestException, forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/model/user.model";
import { AuthDto } from "./dtos/auth.dto";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(data: AuthDto):Promise<{ access_token: string }>  {
        // const existUser = await this.userModel.find({ email: data.username });
        // if (existUser) {
        //     throw new BadRequestException("email already exist");
        // } 
        const token = await this.signIn(data.username, data.password);
        return token;
    }
    // generating jwt token
    async signIn(
        username: string,
        pass: string,
      ): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(username,pass);
        if (user[0]?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user[0]._id, username: user[0].email };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }

}