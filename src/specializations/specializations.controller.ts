import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/specialization.dto';

@Controller('specializations')
export class SpecializationsController {
  constructor(
    private readonly specializationsService: SpecializationsService,
  ) {}

  @Post()
  public async createSpecilization(
    @Body() createSpecializationDto: CreateSpecializationDto,
  ): Promise<any> {
    return this.specializationsService.createSpecilization(
      createSpecializationDto,
    );
  }
  @Get()
  public async getSpecializations(
    @Body() createSpecializationDto: CreateSpecializationDto,
  ): Promise<any> {
    return this.specializationsService.getSpecializations();
  }
}
