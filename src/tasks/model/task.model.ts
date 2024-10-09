import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  taskName: string;

  @Prop()
  description: string;

  @Prop()
  taskStatus: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);