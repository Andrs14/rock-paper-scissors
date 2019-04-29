import { Connection, EntityRepository, Repository } from 'typeorm';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {}

export const PlayersRepositoryProvider = {
  provide: 'PlayersRepository',
  useFactory: (connection: Connection) => connection.getCustomRepository(PlayersRepository),
  inject: [Connection]
};