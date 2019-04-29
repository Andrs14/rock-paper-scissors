import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class AddGames1556496714636 implements MigrationInterface {

  private table: string;

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('');

    const idColumn = {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'uuid',
    };

    await createTable({
      name: 'player',
      columns: [
        idColumn,
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    });

    await createTable({
      name: 'game',
      columns: [
        idColumn,
        {
          name: 'roundsCount',
          type: 'integer',
        },
        {
          name: 'player1Id',
          type: 'uuid',
        },
        {
          name: 'player2Id',
          type: 'uuid',
        },
      ],
    });

    await createForeignKey('game',{
      columnNames: ['player1Id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'player',
    });

    await createForeignKey('game',{
      columnNames: ['player2Id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'player',
    });

    const gameIdColumn = {
      name: 'gameId',
      type: 'uuid',
    };

    await createTable({
      name: 'round',
      columns: [
        idColumn,
        gameIdColumn,
        {
          name: 'order',
          type: 'integer',
        },
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

    const gameIdForeignKey = {
      columnNames: ['gameId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'game',
    };

    await createForeignKey('round', gameIdForeignKey);

    function createTable(options) {
      return queryRunner.createTable(new Table(options), true);
    }

    function createForeignKey(table, options) {
      return queryRunner.createForeignKey(table, new TableForeignKey(options));
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('round');
    await queryRunner.dropTable('game');
    await queryRunner.dropTable('player');
  }

}
