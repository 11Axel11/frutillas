import { Injectable } from '@nestjs/common';
import { CreateVerduraDto } from './dto/create-verdura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Verdura } from './entities/verdura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VerduraService {
  constructor(
    @InjectRepository(Verdura)
    private verduraRepository: Repository<Verdura>
  ){}
  create(createVerduraDto: CreateVerduraDto) {
    const addVerdura = this.verduraRepository.create(createVerduraDto);
    this.verduraRepository.save(addVerdura)
    return addVerdura;
  }

  findAll() {
    return this.verduraRepository.find();
  }

  findOne(id: number) {
    return this.verduraRepository.findOneBy({id});
  }


  remove(id: number) {
    return this.verduraRepository.delete(id);
  }
}
