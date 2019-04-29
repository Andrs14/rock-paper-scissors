import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GamesModule,
  ],
  controllers: [AppController, GamesController],
})
export class AppModule {}
