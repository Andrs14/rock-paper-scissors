import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from '../players/player.entity';
import { Round } from '../rounds/round.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  roundsCount: number;

  @ManyToOne(type => Player, {cascade: true, eager: true})
  @JoinColumn({name: 'player1Id'})
  player1: Player;

  @ManyToOne(type => Player, {cascade: true, eager: true})
  @JoinColumn({name: 'player2Id'})
  player2: Player;

  @OneToMany(type => Round, round => round.game, {eager: true})
  @JoinColumn()
  rounds: Round[];
}
