import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Author } from './entities/author.entity';
import { PaginationDto } from '../../common/dto';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  /**
   *
   * This endpoint creates a new author
   */
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Author,
  })
  @ApiResponse({
    description: 'Validation errors ',
    example: {
      message: ['email must be an email'],
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Author email already exists',
    example: {
      message: 'Author email already exists',
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    example: {
      message: 'Internal Server Error, Check the logs for more information',
    },
  })
  @ApiBody({
    type: CreateAuthorDto,
  })
  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorsService.create(createAuthorDto);
  }

  /**
   * This endpoint returns all authors
   * @param paginationDto
   */
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit the number of authors returned',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'The page number',
  })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto): Promise<Author[]> {
    return await this.authorsService.findAll(paginationDto);
  }

  /**
   * This endpoint returns a single author
   */
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Author id',
    required: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Author is deleted',
    example: {
      message: 'Author is deleted',
    },
  })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Author> {
    return await this.authorsService.findOne(id);
  }

  /**
   * This endpoint updates an author
   * @param id
   * @param updateAuthorDto
   * @returns updated author
   */
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Author id',
    required: true,
  })
  @ApiBody({
    type: UpdateAuthorDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Author email already exists',
    example: {
      message: 'Author email already exists',
    },
  })
  @ApiResponse({
    description: 'Validation errors ',
    example: {
      message: ['email must be an email'],
    },
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return await this.authorsService.update(id, updateAuthorDto);
  }

  /**
   * This endpoint removes an author ( Change the status to deleted )
   * @param id
   */

  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Author id',
    required: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Author not found',
    example: {
      message: 'Author not found',
    },
  })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Author> {
    return await this.authorsService.remove(id);
  }
}
