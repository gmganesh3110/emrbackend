import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Timeslot {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'doctorId' })
    @Index()
    doctorId: number;
    
    @Column()
    day:number;

    @Column()
    startTime:string;

    @Column()
    endTime:string;
  
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
