import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../../companies/entities/company.entity';
import { JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('teams')
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ required: true, type: () => Company })
  @ManyToOne(() => Company, (company) => company.teams, { nullable: false })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  @ApiProperty({ required: true, example: 'Jane Doe' })
  lead: string;
}
