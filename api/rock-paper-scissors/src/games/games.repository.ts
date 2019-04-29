import { Connection, EntityRepository, Repository } from 'typeorm';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {}

export const GamesRepositoryProvider = {
  provide: 'GamesRepository',
  useFactory: (connection: Connection) => connection.getCustomRepository(GamesRepository),
  inject: [Connection]
};