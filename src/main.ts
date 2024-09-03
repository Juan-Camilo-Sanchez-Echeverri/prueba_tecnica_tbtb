import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './modules/config';

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

  await app.listen(envs.port);
  logger.log(`Server running on http://localhost:${envs.port}`);
}
bootstrap();
