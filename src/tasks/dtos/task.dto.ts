import { IsDefined, IsString } from "class-validator";

export class TaskDto{
  @IsString()
  @IsDefined()
  taskName: string;

  @IsString()
  @IsDefined()
  description: string;

  @IsString()
  @IsDefined()
  taskStatus: string;
}