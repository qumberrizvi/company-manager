import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTeamsTable1677784784004 implements MigrationInterface {
  table = 'teams';
  fk = new TableForeignKey({
    columnNames: ['company_id'],
    referencedTableName: 'companies',
    referencedColumnNames: ['id'],
  });

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
            name: 'company_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lead',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(this.table, this.fk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.table, this.fk);
    await queryRunner.dropTable(this.table);
  }
}
