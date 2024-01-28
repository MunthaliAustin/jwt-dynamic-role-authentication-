import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Instructor from 'src/typeOrm/entities/instructor.entity';
import { Repository } from 'typeorm';
import { CreateInstructorDto } from './dto/CreateInstructor.dto';
import { encodePassword } from 'src/resources/bcrypt';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  async createInstructor(createInstructorDto: CreateInstructorDto) {
    const password = encodePassword(createInstructorDto.password);
    const newInstructor = this.instructorRepository.create({
      ...createInstructorDto,
      password,
    });
    return this.instructorRepository.save(newInstructor);
  }

  getAllInstructors() {
    return this.instructorRepository.find();
    // const customer = this.userRepository.find()
    // return (await customer).map((User) => TransformPlainToInstance(SerializedUser, User))
  }

  getInstructorByID(id: number): Promise<Instructor | null> {
    return this.instructorRepository.findOne({ where: { id } });
  }

  async getInstructorByEmail(email: string) {
    const user = this.instructorRepository.findOne({ where: { email } });
    return user;
  }

  async getInstructorByUsername(username: string) {
    const user = this.instructorRepository.findOne({
      where: { username },
    });

    console.log(user);
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.instructorRepository.delete(id);
  }
}
