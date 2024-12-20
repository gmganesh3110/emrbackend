import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Results } from 'src/results/entities/result.entity';
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
export class Appointmentresult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Appointment)
  @JoinColumn({ name: 'appointmentId' })
  appointmentId: number;

  @ManyToOne(() => Results)
  @JoinColumn({ name: 'resultId' })
  resultId: number;

  @Column()
  resultValue: string;

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
