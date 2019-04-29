import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { RoundsModule } from './rounds/rounds.module';
import { PlayersModule } from './players/players.module';
import { GamesController } from './games/games.controller';

@Module({
  imports: [
    GamesModule,
    PlayersModule,
    RoundsModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}
