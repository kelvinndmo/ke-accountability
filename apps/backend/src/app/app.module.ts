import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WakowapiModule } from './wakowapi/wakowapi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissingPersonEntity } from './wakowapi/entities/missing.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      synchronize: true,
      url: process.env.DATABASE_URL,
      // everythiing in the current path with the extension .entity.ts
      entities: [MissingPersonEntity],
    }),
    WakowapiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
