import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesRepository, GamesRepositoryProvider } from './games.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GamesRepository]),
  ],
  providers: [
    GamesRepositoryProvider
  ],
  exports: [GamesRepository]
})
export class GamesModule {}
