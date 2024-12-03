import { Module } from '@nestjs/common';
import { VerduraService } from './verdura.service';
import { VerduraController } from './verdura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verdura } from './entities/verdura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verdura])],
  controllers: [VerduraController],
  providers: [VerduraService],
})
export class VerduraModule {}
