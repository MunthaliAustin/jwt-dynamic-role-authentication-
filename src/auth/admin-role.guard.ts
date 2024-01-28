import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRoles } from 'src/enums/user.enum';
import { InstructorService } from 'src/instructor/instructor.service';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private instructorService: InstructorService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    console.log(request.user);
    if (request.user) {
      const { id } = request.user;
      const user = await this.instructorService.getInstructorByID(id);
      return user.role === UserRoles.ADMIN;
    }

    return false;
  }
}
