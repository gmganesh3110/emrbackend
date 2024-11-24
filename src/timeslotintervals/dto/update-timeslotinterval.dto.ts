import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeslotintervalDto } from './create-timeslotinterval.dto';

export class UpdateTimeslotintervalDto extends PartialType(CreateTimeslotintervalDto) {}
