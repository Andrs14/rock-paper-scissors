import { PlayersRepository } from './players.repository';
import { Player } from './player.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { PlayersModule } from './players.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../test/functional/database.config';

describe('PlayersRepository', () => {
  let repository: PlayersRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PlayersModule,
        TypeOrmModule.forRoot({
          ...databaseConfig,
          entities: [Player],
        }),
      ],
      providers: [
      ],
    }).compile();

    repository = module.get<PlayersRepository>(getRepositoryToken(PlayersRepository));
  });

  afterEach(async () => {
    // await repository.clear();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(repository.target).toBe(Player);
  });

  it('should create a player', async () => {
    const params = {
      name: 'andres',
    };

    const entity = repository.create(params);
    const result = await repository.save(entity);

    expect(result.id).toBeDefined();
    expect(result.name).toEqual(params.name);
  });
});
