import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Student from 'src/typeOrm/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/CreateStudents.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  getAllStudents() {
    return [
      'Austin Munthali',
      'Epline Munthali',
      'Kettie Munthali',
      'Lizzie Munthali',
      'Abigirl Munthali',
    ];
  }

  async createStudent(studentDetails: CreateStudentDto): Promise<Student> {
    const newStudent = this.studentRepository.create(studentDetails);
    return await this.studentRepository.save(newStudent);
  }
}
