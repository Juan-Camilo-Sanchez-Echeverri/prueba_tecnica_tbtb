import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { PaginationDto } from '../../common/dto';
import { AuthorStatus } from './enums/status.enum';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    await this.checkEmailExist(createAuthorDto.email);

    const newAuthor = this.authorRepository.create(createAuthorDto);

    return await this.authorRepository.save(newAuthor);
  }

  async findAll(paginationDto: PaginationDto): Promise<Author[]> {
    const { limit, page } = paginationDto;

    return await this.authorRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorRepository.findOneBy({ id });

    return await this.validateAuthor(author);
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.findOne(id);

    await this.checkEmailExist(updateAuthorDto.email);

    const authorUpdate = await this.authorRepository.preload({
      id,
      ...updateAuthorDto,
    });

    return await this.authorRepository.save(authorUpdate);
  }

  async remove(id: number): Promise<Author> {
    await this.findOne(id);

    const authorDelete = await this.authorRepository.preload({
      id,
      status: AuthorStatus.DELETED,
    });

    return await this.authorRepository.save(authorDelete);
  }

  private async validateAuthor(author: Author): Promise<Author> {
    if (!author) throw new NotFoundException('Author not found');

    if (author.status === AuthorStatus.DELETED) {
      throw new BadRequestException('Author is deleted');
    }

    return author;
  }

  private async checkEmailExist(email: string): Promise<void> {
    if (!email) return;

    const author = await this.authorRepository.findOneBy({ email: email });

    console.log(author);

    if (author) throw new BadRequestException('Author email already exists');
  }
}
