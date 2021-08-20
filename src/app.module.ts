import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
