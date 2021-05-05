import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configureDb = () => {
  return <TypeOrmModuleOptions>{
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'taskmanagement',
    autoLoadEntities: true,
    synchronize: true,
  };
};
