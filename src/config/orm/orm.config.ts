import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT || 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '../../../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: ['error'],
  migrationsTableName: 'typeorm_migrations',
  name: 'default',
  migrations: [__dirname + '../../../**/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '../../../**/subscriber/**/*{.ts,.js}'],
};

export default ormConfig;
