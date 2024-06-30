import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissingPersonEntity } from './entities/missing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MissingPersonEntity])],
})
export class WakowapiModule {}
