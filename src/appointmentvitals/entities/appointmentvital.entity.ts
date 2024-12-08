import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Users } from 'src/users/entities/user.entity';
import { Vitals } from 'src/vitals/entities/vital.entity';
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
export class Appointmentvital {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Appointment)
  @JoinColumn({ name: 'appointmentId' })
  appointmentId: number;

  @ManyToOne(() => Vitals)
  @JoinColumn({ name: 'vitalId' })
  vitalId: number;

  @Column()
  vitalValue: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'createdBy' })
  createdBy: number;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'modifiedBy' })
  modifiedBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  modifiedAt: Date;

  @Column()
  activeStatus: boolean;
}
