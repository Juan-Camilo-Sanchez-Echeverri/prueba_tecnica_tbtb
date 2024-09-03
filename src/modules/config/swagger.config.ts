import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API the authors')
  .setDescription('API for managing authors')
  .setVersion('1.0')
  .build();
