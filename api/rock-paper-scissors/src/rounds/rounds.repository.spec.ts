import { RoundsRepository } from './rounds.repository';
import { Round } from './round.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { RoundsModule } from './rounds.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../test/functional/database.config';
import { GamesModule } from '../games/games.module';

describe('RoundsRepository', () => {
  let repository: RoundsRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        RoundsModule,
        GamesModule,
        TypeOrmModule.forRoot({
          ...databaseConfig,
          entities: [Round],
        }),
      ],
      providers: [
      ],
    }).compile();

    repository = module.get<RoundsRepository>(getRepositoryToken(RoundsRepository));
  });

  afterEach(async () => {
    await repository.clear();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(repository.target).toBe(Round);
  });

  it('should create a round', async () => {
    const params = {
      name: 'andres',
    };

    const result = await repository.create(params);

    expect(result.id).toBeDefined();
    expect(result.name).toEqual(params.name);
  });
});
