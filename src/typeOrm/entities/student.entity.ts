import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Course from './course.entity';

@Entity('students')
class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  regnumber: string;

  @Column('int')
  age: number;

  @ManyToOne(() => Course, (course) => course.student)
  course: Course;
}

export default Student;
