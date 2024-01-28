import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import Course from 'src/typeOrm/entities/course.entity';
import Student from 'src/typeOrm/entities/student.entity';

// export const typerOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   useFactory: async (): Promise<TypeOrmModuleOptions> => {
//     return {
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT, 10),
//       database: process.env.DB_NAME,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       entities: [Student, Course],
//       migrations: [__dirname + '/../migrations/*{.ts,.js}'],
//       cli: {
//         migrationDir: __dirname + '/../migrations',
//       },
//       extra: {
//         charset: 'utf8mb4_unicode_ci', // Fix the typo here
//       },
//       synchronize: true,
//     };
//   },
// };
