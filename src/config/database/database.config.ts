import { registerAs } from '@nestjs/config';
import ormConfig from '../orm/orm.config';

export default registerAs('database', () => ({
  ...ormConfig,
}));
