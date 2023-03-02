import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { Company } from '../companies/entities/company.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
  ) {}

  async create(companyId: string, createTeamDto: CreateTeamDto): Promise<Team> {
    const company = await Company.findOneByOrFail({ id: companyId });
    const team = new Team();
    team.company = company;
    team.lead = createTeamDto.lead;
    return this.repository.create(team).save();
  }
}
