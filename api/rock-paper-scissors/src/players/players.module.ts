import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { PlayersRepository, PlayersRepositoryProvider } from './players.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlayersRepository])],
  providers: [PlayersRepositoryProvider],
  exports: [PlayersRepository]
})
export class PlayersModule {}
