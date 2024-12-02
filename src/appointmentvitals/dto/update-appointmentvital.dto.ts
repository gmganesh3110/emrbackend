import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentvitalDto } from './create-appointmentvital.dto';

export class UpdateAppointmentvitalDto extends PartialType(CreateAppointmentvitalDto) {}
