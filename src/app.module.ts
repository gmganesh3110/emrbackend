import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserTypesModule } from './user-roles/user-role.module';
import { Users } from './users/entities/user.entity';
import { UserRole } from './user-roles/entities/user-role.entity';
import { SpecializationsModule } from './specializations/specializations.module';
import { Specialization } from './specializations/entities/specialization.entity';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { Timeslot } from './timeslots/entities/timeslot.entity';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { Patients } from './patients/entities/patient.entity';
import { TimeslotintervalsModule } from './timeslotintervals/timeslotintervals.module';
import { Timeslotinterval } from './timeslotintervals/entities/timeslotinterval.entity';
import { AppointmentsModule } from './appointments/appointments.module';
import { Appointment } from './appointments/entities/appointment.entity';
import { VitalsModule } from './vitals/vitals.module';
import { Vitals } from './vitals/entities/vital.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [
          Users,
          UserRole,
          Specialization,
          Timeslot,
          Patients,
          Timeslotinterval,
          Appointment,
          Vitals
        ],
      }),
    }),
    UsersModule,
    UserTypesModule,
    SpecializationsModule,
    TimeslotsModule,
    AuthModule,
    PatientsModule,
    TimeslotintervalsModule,
    AppointmentsModule,
    VitalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
