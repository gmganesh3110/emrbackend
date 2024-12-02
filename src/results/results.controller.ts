import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { ResultsService } from './results.service';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateResultsDto,
  SearchResultsDto,
  UpdateResultsDto,
} from './dto/result.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @UseGuards(AuthGuard)
  @Post()
  public async addResults(
    @Body() createResultDto: CreateResultsDto,
  ): Promise<any> {
    return this.resultsService.addResults(createResultDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  public async getAllResults(
    @Query() searchResultsDto: SearchResultsDto,
  ): Promise<any> {
    return this.resultsService.getAllResults(searchResultsDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getResultsSingle(@Param('id') id: number): Promise<any> {
    return this.resultsService.getResultsSingle(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  public async updateSingleResult(
    @Param('id') id: number,
    @Body() updateResultsDto: UpdateResultsDto,
  ): Promise<any> {
    return this.resultsService.updateSingleResult(id, updateResultsDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public async deleteSingleResult(
    @Param('id') id: number,
    @Body() request: any,
  ): Promise<any> {
    return this.resultsService.deleteSingleResult(id, request);
  }
}
