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
import { PaymodesService } from './paymodes.service';
import { CreatePaymodeDto, GetPaymodesDto, UpdatePaymodeDto } from './dto/paymode.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('paymodes')
export class PaymodesController {
  constructor(private readonly paymodesService: PaymodesService) {}

  @UseGuards(AuthGuard)
  @Post()
  public async createPaymode(
    @Body() createPaymodeDto: CreatePaymodeDto,
  ): Promise<any> {
    this.paymodesService.createPaymode(createPaymodeDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  public async getAllPaymodes(
    @Query() getPaymodesDto: GetPaymodesDto,
  ): Promise<any> {
    return this.paymodesService.getAllPaymodes(getPaymodesDto);
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  public async getSinglePaymode(
    @Param('id') id: number,
  ): Promise<any> {
    return this.paymodesService.getSinglePaymode(id);
  }


  @UseGuards(AuthGuard)
  @Patch(':id')
  public async updateSpecialization(
    @Param('id') id: number,
    @Body() updatePaymodeDto: UpdatePaymodeDto,
  ): Promise<any> {
    return this.paymodesService.updatePaymode(
      id,
      updatePaymodeDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public async deleteSpecialization(
    @Param('id') id: number,
    @Body() request:any,
  ): Promise<any> {
    return this.paymodesService.deletePaymode(
      id,
      request,
    );
  }

}
