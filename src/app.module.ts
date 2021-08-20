import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port= this._configService.get(Configuration.PORT)
  }
}
