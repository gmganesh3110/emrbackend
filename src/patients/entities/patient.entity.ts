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
export class Patients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  relationName: string;

  @Column()
  mobileNumber: string;

  @Column()
  gender: string;

  @Column({ unique: true }) 
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  bloodGroup: string;

  @Column()
  age: string;

  @Column()
  maritalStatus: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'createdBy' }) // @Index() not needed here
  createdBy: number;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'modifiedBy' }) // @Index() not needed here
  modifiedBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  modifiedAt: Date;

  @Column()
  activeStatus: boolean;
}
