import { Module } from '@nestjs/common';
import { AppController } from './app/profile.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
