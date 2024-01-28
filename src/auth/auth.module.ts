import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { InstructorModule } from 'src/instructor/instructor.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AdminRoleGuard } from './admin-role.guard';
import { jwtAuthGuard } from './jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import Instructor from 'src/typeOrm/entities/instructor.entity';
import { InstructorService } from 'src/instructor/instructor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Instructor]),
    InstructorModule,
    PassportModule,
    JwtModule.register({
      secret: 'doNotShareThisWithAnyone',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    AdminRoleGuard,
    jwtAuthGuard,
    InstructorService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
