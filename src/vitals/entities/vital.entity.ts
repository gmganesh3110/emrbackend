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
export class Vitals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortCode: string;

  @Column()
  displayName: string;

  @Column()
  measurement: string;

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
