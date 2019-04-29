import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GamesRepository } from './games.repository';
import { PlayersRepository } from '../players/players.repository';

@Controller('games')
export class GamesController {
  defaultRounds = 3;

  constructor(
    private readonly repository: GamesRepository,
    private readonly playersRepository: PlayersRepository
  ) {}

  @Get(':id')
  async findOne(@Param() params) {
    const foundGame = await this.repository.findOne(params.id);

    return {
      data: {
        ...foundGame,
      },
    };
  }

  @Post()
  async create(@Body() body) {
    const player1 = this.playersRepository.create({
      name: body.player1,
    });
    const player2 = this.playersRepository.create({
      name: body.player2,
    });

    const game = this.repository.create({
      player1,
      player2,
      roundsCount: this.defaultRounds,
    });

    const createdGame = await this.repository.save(game);

    return {
      data: {
        id: createdGame.id,
        route: `/games/${createdGame.id}`,
        player1: {
          id: createdGame.player1.id,
          route: `/games/${createdGame.player1.id}`,
        },
        player2: {
          id: createdGame.player2.id,
          route: `/games/${createdGame.player2.id}`,
        },
      },
    };
  }
}
