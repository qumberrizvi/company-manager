import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompaniesTable1677783836435 implements MigrationInterface {
  table = 'companies';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.table,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ceo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'inception_at',
            type: 'timestamp',
            default: 'current_timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
