import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
// import { registerDiscord } from './app.controller';




async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  // registerDiscord();
}
bootstrap();
