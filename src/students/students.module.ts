import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Student from 'src/typeOrm/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [
    {
      provide: 'STUDENT_SERVICE',
      useClass: StudentsService,
    },
  ],
  controllers: [StudentsController],
})
export class StudentsModule {}
