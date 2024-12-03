import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VerduraService } from './verdura.service';
import { CreateVerduraDto } from './dto/create-verdura.dto';


@Controller('verdura')
export class VerduraController {
  constructor(private readonly verduraService: VerduraService) {}

  @Post()
  create(@Body() createVerduraDto: CreateVerduraDto) {
    return this.verduraService.create(createVerduraDto);
  }

  @Get()
  findAll() {
    return this.verduraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verduraService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verduraService.remove(+id);
  }
}
