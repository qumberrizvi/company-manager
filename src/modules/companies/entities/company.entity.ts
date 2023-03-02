import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Team } from '../../teams/entities/team.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('companies')
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    required: true,
    example: '7366a6fe-8ee0-4f3c-9624-1fc7045890b1',
  })
  id: string;

  @Column({ nullable: false })
  @ApiProperty({ required: true, example: 'Company Pvt Ltd' })
  name: string;

  @Column({ nullable: false })
  @ApiProperty({ required: true, example: 'John Doe' })
  ceo: string;

  @Column({ nullable: true })
  @ApiProperty({ required: false, example: 'Victoria Street, Lucknow, India' })
  address?: string;

  @CreateDateColumn({ name: 'inception_at', nullable: false })
  @ApiProperty({ required: false, example: '1990/12/31' })
  inception: Date;

  @OneToMany(() => Team, (team) => team.company)
  @ApiProperty({ required: false, type: () => [Team] })
  teams: Team[];
}
