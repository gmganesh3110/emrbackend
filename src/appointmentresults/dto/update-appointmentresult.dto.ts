import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentresultDto } from './create-appointmentresult.dto';

export class UpdateAppointmentresultDto extends PartialType(CreateAppointmentresultDto) {}
