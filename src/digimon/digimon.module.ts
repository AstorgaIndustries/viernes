import { Module, HttpModule } from '@nestjs/common';
import { DigimonController } from './digimon.controller';
import { DigimonService } from './digimon.service';

@Module({
  imports:[HttpModule],
  controllers: [DigimonController],
  providers: [DigimonService]
})
export class DigimonModule {}
