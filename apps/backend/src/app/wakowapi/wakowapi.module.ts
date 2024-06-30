import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissingPersonEntity } from './entities/missing.entity';
import { MissingPersonController } from './controllers/missing-person.controller';
import { MissingPersonService } from './services/missing-person.service';

@Module({
  imports: [TypeOrmModule.forFeature([MissingPersonEntity])],
  controllers: [MissingPersonController],
  providers: [MissingPersonService],
})
export class WakowapiModule {}
