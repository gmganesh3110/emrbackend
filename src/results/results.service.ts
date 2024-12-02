import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { CreateResultsDto, SearchResultsDto, UpdateResultsDto } from './dto/result.dto';

@Injectable()
export class ResultsService {
  constructor(private entityManager: EntityManager) {}
  public async addResults(createResultsDto: CreateResultsDto): Promise<any> {
    try {
      const {
        name,
        shortCode,
        displayName,
        measurement,
        description,
        createdBy,
      } = createResultsDto;
      const query = 'call resultscreate(?,?,?,?,?,?)';
      const params = [
        name,
        shortCode,
        displayName,
        measurement,
        description,
        createdBy,
      ];
      await this.entityManager.query(query, params);
      return 'results added successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllResults(searchResultsDto: SearchResultsDto): Promise<any> {
    try {
      const { name, code, start, limit } = searchResultsDto;
      const query = 'call resultsgetall(?,?,?,?)';
      const params = [name, code, start, limit];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async getResultsSingle(id: number): Promise<any> {
    try {
      const query = 'call resultsgetone(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async deleteSingleResult(id: number, request: any): Promise<any> {
    try {
      const query = 'call resultsdeleteone(?,?)';
      const params = [id, request?.modifiedBy];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async updateSingleResult(
    id: number,
    updateResultsDto: UpdateResultsDto,
  ): Promise<any> {
    try {
      const {
        name,
        shortCode,
        displayName,
        measurement,
        description,
        modifiedBy,
      } = updateResultsDto;
      const query = 'call resultsupdateone(?,?,?,?,?,?,?)';
      const params = [
        id,
        name,
        shortCode,
        displayName,
        measurement,
        description,
        modifiedBy,
      ];
      await this.entityManager.query(query, params);
      return 'Results Updated successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

}
