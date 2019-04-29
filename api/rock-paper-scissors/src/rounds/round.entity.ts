import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../games/game.entity';

@Entity()
export class Round {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => Game)
  @JoinColumn({name: 'gameId'})
  game: Game;
}