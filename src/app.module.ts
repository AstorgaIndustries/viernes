import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [WeatherModule,HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
