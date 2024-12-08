import { Injectable } from '@nestjs/common';
import { CreateFeeitemDto } from './dto/create-feeitem.dto';
import { UpdateFeeitemDto } from './dto/update-feeitem.dto';

@Injectable()
export class FeeitemsService {
  create(createFeeitemDto: CreateFeeitemDto) {
    return 'This action adds a new feeitem';
  }

  findAll() {
    return `This action returns all feeitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feeitem`;
  }

  update(id: number, updateFeeitemDto: UpdateFeeitemDto) {
    return `This action updates a #${id} feeitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} feeitem`;
  }
}
