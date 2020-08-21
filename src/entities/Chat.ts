import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import Message from './Message';
import Ride from './Ride';
import User from './User';

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany((type) => Message, (message) => message.chat, { nullable: true })
  messages: Message[];

  @Column({ nullable: true })
  passengerId: number;

  @ManyToOne((type) => User, (user) => user.chatAsPassenger)
  passenger: User;

  @Column({ nullable: true })
  rideId: number;

  @OneToOne((type) => Ride, (ride) => ride.chat)
  ride: Ride;

  @Column({ nullable: true })
  driverId: number;

  @ManyToOne((type) => User, (user) => user.chatAsDriver)
  driver: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Chat;
