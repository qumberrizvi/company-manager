import { Ability } from '../enums/ability.enum';

export const demoUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
    password: 'john@123',
    ability: Ability.READ,
  },
  {
    firstName: 'Qumber',
    lastName: 'Rizvi',
    email: 'qumber@mail.com',
    password: 'qumber@123',
    ability: Ability.READ_WRITE,
  },
];
