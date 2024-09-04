import { ApiProperty } from '@nestjs/swagger';

import { IsDate, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { IsNotBlank } from '../../../common/decorators';
import { AuthorStatus } from '../enums/status.enum';

export class CreateAuthorDto {
  @IsNotBlank({ message: 'name is required and should not be empty' })
  @ApiProperty({
    description: 'Author name',
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'Author email',
    example: 'author@example.com',
  })
  email: string;

  @IsEnum(AuthorStatus)
  @IsOptional()
  @ApiProperty({
    description: 'Author status',
    examples: [
      AuthorStatus.ACTIVE,
      AuthorStatus.INACTIVE,
      AuthorStatus.DELETED,
    ],
    enum: AuthorStatus,
    default: AuthorStatus.ACTIVE,
  })
  status?: AuthorStatus;

  @IsDate()
  @ApiProperty({
    description: 'Author birth date',
    example: '1990-01-01',
  })
  birthDate: Date;
}
