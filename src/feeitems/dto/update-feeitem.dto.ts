import { PartialType } from '@nestjs/mapped-types';
import { CreateFeeitemDto } from './create-feeitem.dto';

export class UpdateFeeitemDto extends PartialType(CreateFeeitemDto) {}
