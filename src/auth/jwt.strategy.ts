// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { InstructorService } from 'src/instructor/instructor.service';

// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly instructorService: InstructorService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'doNotShareThisWithAnyone',
//     });
//   }

//   async validate(payload: any) {
//     // return {
//     //   id: payload.sub,
//     //   username: payload.name,
//     //   add: 'string',
//     // };

//     const user = await this.instructorService.getAllInstructors();
//     return user;
//   }
// }

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { InstructorService } from 'src/instructor/instructor.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly instructorService: InstructorService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'doNotShareThisWithAnyone',
    });
  }

  async validate(payload: any) {
    const user = await this.instructorService.getInstructorByID(payload.sub);
    return user;
  }
}
