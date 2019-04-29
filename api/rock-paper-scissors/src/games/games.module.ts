import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesRepository } from './games.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GamesRepository])],
  providers: [GamesRepository],
})
export class GamesModule {}
