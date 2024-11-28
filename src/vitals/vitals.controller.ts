import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VitalsService } from './vitals.service';
@Controller('vitals')
export class VitalsController {
  constructor(private readonly vitalsService: VitalsService) {}

}
