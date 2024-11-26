import { Patients } from 'src/patients/entities/patient.entity';
import { Timeslotinterval } from 'src/timeslotintervals/entities/timeslotinterval.entity';
import { Timeslot } from 'src/timeslots/entities/timeslot.entity';
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
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patients)
  @JoinColumn({ name: 'patientId' })
  patientId: number;

  @Column()
  timeSlot: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'doctorId' })
  doctorId: number;

  @Column()
  appDate: Date;

  @Column({default:null})
  inTime: string;

  @Column({default:null})
  outTime: string;

  @Column()
  visitPurpose: string;

  @Column()
  appStatus: string;

  @Column({default:null})
  nextVisit: Date;

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
