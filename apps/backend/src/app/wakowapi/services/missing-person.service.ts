import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MissingPersonEntity } from '../entities/missing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MissingPersonService {
  constructor(
    @InjectRepository(MissingPersonEntity)
    private missingPersonRepository: Repository<MissingPersonEntity>
  ) {}

  async createMissingPerson(data: MissingPersonEntity) {
    return await this.missingPersonRepository.save(data);
  }

  async getMissingPeople() {
    return await this.missingPersonRepository.find();
  }
}
