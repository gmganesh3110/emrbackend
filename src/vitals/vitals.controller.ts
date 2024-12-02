import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Put,
} from '@nestjs/common';
import { VitalsService } from './vitals.service';
import {
  CreateVitalDto,
  SearchVitalsDto,
  UpdateVitalDto,
} from './dto/vital.dto';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('vitals')
export class VitalsController {
  constructor(private readonly vitalsService: VitalsService) {}

  @UseGuards(AuthGuard)
  @Post()
  public async addVitals(@Body() createVitalDto: CreateVitalDto): Promise<any> {
    return this.vitalsService.addVitals(createVitalDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  public async getAllVitals(
    @Query() searchVitalsDto: SearchVitalsDto,
  ): Promise<any> {
    return this.vitalsService.getAllVitals(searchVitalsDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getVitalSigle(@Param('id') id: number): Promise<any> {
    return this.vitalsService.getVitalSigle(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  public async updateSingleVital(
    @Param('id') id: number,
    @Body() updateVitalDto: UpdateVitalDto,
  ): Promise<any> {
    return this.vitalsService.updateSingleVital(id, updateVitalDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public async deleteSingleVital(
    @Param('id') id: number,
    @Body() request: any,
  ): Promise<any> {
    return this.vitalsService.deleteSingleVital(id, request);
  }
}
