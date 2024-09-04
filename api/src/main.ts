import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import { envs } from './modules/config';
import { swaggerConfig } from './modules/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('APP');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);

  await app.listen(envs.port);
  logger.log(`Server running on http://localhost:${envs.port}`);
}
bootstrap();
