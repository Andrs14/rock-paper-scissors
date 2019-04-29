import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddGames1556496714636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('');

      await queryRunner.createTable(new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
        ],
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('games');
    }

}
