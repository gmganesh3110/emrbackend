import { Timeslot } from 'src/timeslots/entities/timeslot.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Timeslotinterval {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'doctorId' })
  @Index()
  doctorId: number;

  @ManyToOne(() => Timeslot)
  @JoinColumn({ name: 'timeslotId' })
  @Index()
  timeslotId: number;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'createdBy' })
  @Index()
  createdBy: number;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'modifiedBy' })
  @Index()
  modifiedBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  modifiedAt: Date;

  @Column()
  activeStatus: boolean;
}
