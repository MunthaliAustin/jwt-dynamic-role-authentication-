import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { InstructorService } from 'src/instructor/instructor.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly instructorService: InstructorService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    // console.log('roles', roles);

    const request = context.switchToHttp().getRequest();

    console.log(request.user);
    if (request.user) {
      const { id } = request.user;
      const user = await this.instructorService.getInstructorByID(id);
      return roles.includes(user.role);
    }

    return false;
  }
}
