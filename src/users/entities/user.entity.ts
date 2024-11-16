import { Specialization } from 'src/specializations/entities/specialization.entity';
import { UserRole } from 'src/user-roles/entities/user-role.entity';
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
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobileNumber: string;

  @Column({ unique: true })
  @Index()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => UserRole)
  @JoinColumn({ name: 'userRole' })
  @Index()
  userRole: number;

  @Column({ type: 'datetime' })
  dateOfBirth: Date;

  @Column()
  age: string;

  @ManyToOne(() => Specialization)
  @JoinColumn({ name: 'specialization' })
  @Index()
  specialization: number;

  @Column()
  experience: number;

  @Column()
  qualifications: string;

  @Column()
  address: string;

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
