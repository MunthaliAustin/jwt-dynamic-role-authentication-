import { IsInt, IsNotEmpty, IsString, Length, isInt } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  name: string;

  @IsString()
  regnumber: string;

  @IsInt()
  age: number;
}
