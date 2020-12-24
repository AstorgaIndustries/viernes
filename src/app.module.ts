import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { DigimonModule } from './digimon/digimon.module';

@Module({
  imports: [WeatherModule,HttpModule, DigimonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
