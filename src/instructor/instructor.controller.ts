import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto } from './dto/CreateInstructor.dto';
import { AdminRoleGuard } from 'src/auth/admin-role.guard';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post('create')
  async createInstructor(@Body() createInstructorDto: CreateInstructorDto) {
    return await this.instructorService.createInstructor(createInstructorDto);
  }

  @Get('all')
  async getAll() {
    const users = await this.instructorService.getAllInstructors();
    return users;
  }

  @Get('by-email')
  async getInstructorByEmail(@Body('email') email: string) {
    const instructor = await this.instructorService.getInstructorByEmail(email);

    if (instructor) return instructor;
    else
      throw new HttpException('instructor not found', HttpStatus.BAD_REQUEST);
  }

  @Get('by-username')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'member')
  async getInstructorByUsername(@Body('username') username: string) {
    const instructor =
      await this.instructorService.getInstructorByUsername(username);

    if (instructor) return instructor;
    else
      throw new HttpException('instructor not found', HttpStatus.BAD_REQUEST);
  }

  @UseGuards(AuthGuard('jwt'), AdminRoleGuard)
  // @UseGuards(AdminRoleGuard)
  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    const instructor = await this.instructorService.getInstructorByID(id);
    if (instructor) return instructor;
    else
      throw new HttpException('instructor not found', HttpStatus.BAD_REQUEST);
  }

  @Delete('remove/:id')
  async delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    const instructor = await this.instructorService.getInstructorByID(id);
    if (instructor) {
      this.instructorService.remove(id);
      return { deleted: instructor };
    } else
      throw new HttpException('instructor not found', HttpStatus.BAD_REQUEST);
  }
}
