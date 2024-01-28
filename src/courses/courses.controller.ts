import { Controller, Get, Inject } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';

@Controller('courses')
export class CoursesController {
  constructor(@Inject('COURSE_SERVICE') private courses: CoursesService) {}
}
