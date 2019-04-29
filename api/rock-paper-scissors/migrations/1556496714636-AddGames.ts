import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddGames1556496714636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('');

      function createTable(options) {
        return queryRunner.createTable(new Table(options), true);
      }


      const idColumn = {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'uuid',
      };
      await createTable({
        name: 'game',
        columns: [
          idColumn,
          {
            name: 'roundsCount',
            type: 'integer',
          },
        ],
      });

      await createTable({
        name: 'round',
        columns: [
          idColumn,
          {
            name: 'player1Move',
            type: 'varchar',
          },
          {
            name: 'player2Move',
            type: 'varchar',
          },
        ],
      });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('game');
      await queryRunner.dropTable('round');
    }

}
