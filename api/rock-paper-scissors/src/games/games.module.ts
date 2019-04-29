import { Module } from '@nestjs/common';
import { Game } from './Game';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Game)],
  providers: [],
})
export class GamesModule {}
