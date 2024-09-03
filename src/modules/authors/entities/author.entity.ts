import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthorStatus } from '../enums/status.enum';

@Entity({ name: 'authors' })
export class Author {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email: string;

  @Column({ type: 'enum', enum: AuthorStatus, default: AuthorStatus.ACTIVE })
  status: AuthorStatus;

  @Column({ type: 'date', nullable: false })
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
