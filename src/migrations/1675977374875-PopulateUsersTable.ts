import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../modules/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { bcryptConstant } from '../modules/auth/constants/bcrypt.constant';
import { demoUsers } from '../constants/demo.users';

export class PopulateUsersTable1675977374875 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const users = [];
    for (const userDatum of demoUsers) {
      const user = new User();
      Object.assign(user, userDatum);
      user.password = await bcrypt.hash(
        userDatum.password,
        bcryptConstant.saltOrRounds,
      );
      users.push(user);
    }
    await queryRunner.manager.save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('users');
  }
}
