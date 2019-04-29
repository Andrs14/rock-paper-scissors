import { GamesRepository } from './games.repository';
import { Game } from './game.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { GamesModule } from './games.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../test/functional/database.config';
import { PlayersModule } from '../players/players.module';
import { PlayersRepository } from '../players/players.repository';
import { Player } from '../players/player.entity';
import { Round } from '../rounds/round.entity';

describe('GamesRepository', () => {
  let repository: GamesRepository;
  let playersRepository: PlayersRepository;
  let result: Game;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        GamesModule,
        PlayersModule,
        TypeOrmModule.forRoot({
          ...databaseConfig,
          entities: [Game, Player, Round],
        }),
      ],
      providers: [
      ],
    }).compile();

    repository = module.get<GamesRepository>(getRepositoryToken(GamesRepository));
    playersRepository = module.get<PlayersRepository>(getRepositoryToken(PlayersRepository));
  });

  afterEach(async () => {
    await removeIfDefined(result);
    await removeIfDefined(result ? result.player1 : undefined);
    await removeIfDefined(result ? result.player2 : undefined);

    async function removeIfDefined(game) {
      if (game) {
        await repository.remove(game);
      }
    }
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(repository.target).toBe(Game);
  });

  it('should create a game', async () => {
    const params = {
      roundsCount: 4,
      player1: playersRepository.create({
        name: 'jugador 1',
      }),
      player2: playersRepository.create({
        name: 'jugador 2',
      }),
    };

    const entity = repository.create(params);
    result = await repository.save(entity);

    expect(result.id).toBeDefined();

    expect(result.player1.name).toEqual(params.player1.name);
    expect(result.player1.id).toBeDefined();

    expect(result.player2.name).toEqual(params.player2.name);
    expect(result.player2.id).toBeDefined();

  });
});
