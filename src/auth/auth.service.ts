import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InstructorService } from 'src/instructor/instructor.service';
import { comparePasswords } from 'src/resources/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly instructorService: InstructorService,
    private jtwService: JwtService,
  ) {}

  async validateUserCred(username: string, password: string): Promise<any> {
    const user = this.instructorService.getInstructorByUsername(username);

    if (!user) throw new BadRequestException();

    if (!comparePasswords(password, (await user).password))
      throw new UnauthorizedException();
    return user;
  }

  async generateToken(user: any) {
    return {
      access_token: this.jtwService.sign({
        sub: user.id,
        name: user.username,
      }),
    };
  }
}
