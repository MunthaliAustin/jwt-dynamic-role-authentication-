import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Student from './typeOrm/entities/student.entity';
import Course from './typeOrm/entities/course.entity';
// import { typerOrmAsyncConfig } from './config/typeorm.config';
import { InstructorModule } from './instructor/instructor.module';
import { AuthModule } from './auth/auth.module';
import Instructor from './typeOrm/entities/instructor.entity';

@Module({
  imports: [
    CoursesModule,
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'temp',
      entities: [Student, Course, Instructor],
      synchronize: true,
    }),
    InstructorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
