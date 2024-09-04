import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name, {
    timestamp: true,
  });

  constructor() {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const isInternalException = status === HttpStatus.INTERNAL_SERVER_ERROR;

    if (isInternalException) this.logger.error(exception);

    const messageException = isInternalException
      ? 'Internal Server Error, Check the logs for more information'
      : exception?.response?.message || exception.message;

    response.status(status).json({ message: messageException });
  }
}
