import { Test, TestingModule } from '@nestjs/testing';
import { GamesController } from './games.controller';
import { GamesRepository } from './games.repository';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { PlayersRepository } from '../players/players.repository';
import { PlayersModule } from '../players/players.module';
import databaseConfig from '../../test/functional/database.config';
import { Player } from '../players/player.entity';

describe('Games Controller', () => {
  let controller: GamesController;

  const repositoryMock = buildRepositoryMock();

  function buildRepositoryMock() {
    const returnCreate =  data => data;

    const returnSave = ({player1, player2, roundsCount}) => ({
      id: 'gamefakeid',
      player1: {
        id: 'playerfakeid',
        ...player1,
      },
      player2: {
        id: 'player2fakeid',
        ...player2,
      },
      roundsCount,
    });

    return {
      create: jest.fn(returnCreate),
      save: jest.fn(returnSave),
    };
  }

  const playersRepositoryMock = buildPlayersRepositoryMock();

  function buildPlayersRepositoryMock() {
    return {
      create: jest.fn(data => data),
    };
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PlayersModule,
        TypeOrmModule.forRoot({
          ...databaseConfig,
          entities: [Player],
        })
      ],
      controllers: [GamesController],
      providers: [
        {
          provide: GamesRepository,
          useValue: repositoryMock,
        },
        {
          provide: PlayersRepository,
          useValue: playersRepositoryMock,
        },
      ],
    }).compile();

    controller = module.get<GamesController>(GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a game with its players', async () => {
    const request = {
      player1: 'platon',
      player2: 'aristoteles',
    };

    const response = await controller.create(request);

    const expectedPlayer1 = { name: request.player1 };
    const expectedPlayer2 = { name: request.player2 };


    expect(repositoryMock.save).toBeCalledWith(
      expect.objectContaining({
        roundsCount: 3,
        player1: expectedPlayer1,
        player2: expectedPlayer2,
      }),
    );

  });
});
