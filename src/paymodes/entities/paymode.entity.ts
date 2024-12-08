import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Paymode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  paymode: string;

  @Column()
  description: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'createdBy' })
  createdBy: number;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'modifiedBy' })
  modifiedBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  modifiedAt: number;

  @Column({ type: 'boolean', default: true })
  activeStatus: boolean;
}
