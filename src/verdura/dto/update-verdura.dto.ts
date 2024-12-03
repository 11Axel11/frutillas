import { PartialType } from '@nestjs/mapped-types';
import { CreateVerduraDto } from './create-verdura.dto';

export class UpdateVerduraDto extends PartialType(CreateVerduraDto) {}
