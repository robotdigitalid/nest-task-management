import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  password: string;

  @Column()
  username: string;

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
