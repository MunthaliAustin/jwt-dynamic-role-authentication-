import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import Student from './student.entity';

@Entity('courses')
class Course {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student) => student.course)
  student: Student[];
}

export default Course;
