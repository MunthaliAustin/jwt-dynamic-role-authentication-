import { Injectable } from '@nestjs/common';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { InjectRepository } from '@nestjs/typeorm';
import Course from 'src/typeOrm/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly studentRepository: Repository<Course>,
  ) {}
}
