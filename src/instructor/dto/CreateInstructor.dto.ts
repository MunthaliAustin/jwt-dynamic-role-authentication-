import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  isInt,
} from 'class-validator';

export class CreateInstructorDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
