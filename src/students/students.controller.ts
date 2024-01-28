import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/CreateStudents.dto';

@Controller('students')
export class StudentsController {
  constructor(
    @Inject('STUDENT_SERVICE') private readonly studentService: StudentsService,
  ) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createStudent(@Body() createStudent: CreateStudentDto) {
    return await this.studentService.createStudent(createStudent);
  }
}
