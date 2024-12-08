import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeeitemsService } from './feeitems.service';
import { CreateFeeitemDto } from './dto/create-feeitem.dto';
import { UpdateFeeitemDto } from './dto/update-feeitem.dto';

@Controller('feeitems')
export class FeeitemsController {
  constructor(private readonly feeitemsService: FeeitemsService) {}

  @Post()
  create(@Body() createFeeitemDto: CreateFeeitemDto) {
    return this.feeitemsService.create(createFeeitemDto);
  }

  @Get()
  findAll() {
    return this.feeitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feeitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeeitemDto: UpdateFeeitemDto) {
    return this.feeitemsService.update(+id, updateFeeitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feeitemsService.remove(+id);
  }
}
