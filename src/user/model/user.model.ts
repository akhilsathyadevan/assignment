import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastName: number;

  @Prop()
  email: string;

  @Prop()
  phone: number;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);