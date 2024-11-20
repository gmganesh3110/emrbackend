import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import {
  CreateSpecializationDto,
  GetSpecializationDto,
  UpdateSpecializationDto,
} from './dto/specialization.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('specializations')
export class SpecializationsController {
  constructor(
    private readonly specializationsService: SpecializationsService,
  ) {}

  @UseGuards(AuthGuard)
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
  public async getSpecializations(
    @Query() getSpecializationDto: GetSpecializationDto,
  ): Promise<any> {
    return this.specializationsService.getSpecializations(getSpecializationDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getSpecialization(@Param('id') id: number): Promise<any> {
    return this.specializationsService.getSpecialization(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  public async updateSpecialization(
    @Param('id') id: number,
    @Body() updateSpecializationDto: UpdateSpecializationDto,
  ): Promise<any> {
    return this.specializationsService.updateSpecialization(
      id,
      updateSpecializationDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public async deleteSpecialization(
    @Param('id') id: number,
    @Body() request:any,
  ): Promise<any> {
    return this.specializationsService.deleteSpecialization(
      id,
      request,
    );
  }
}
