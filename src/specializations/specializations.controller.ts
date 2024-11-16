import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/specialization.dto';
import { AuthGuard } from 'src/auth/auth.guard';

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
  
  @UseGuards(AuthGuard)
  @Get()
  public async getSpecializations(): Promise<any> {
    return this.specializationsService.getSpecializations();
  }
}
