import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from 'src/typeOrm/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [
    {
      provide: 'COURSE_SERVICE',
      useClass: CoursesService,
    },
  ],
})
export class CoursesModule {}
