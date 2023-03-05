import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Like, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly repository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    Object.assign(company, createCompanyDto);
    return this.repository.create(company).save();
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Company>> {
    return paginate<Company>(this.repository, options, {
      relations: ['teams'],
    });
  }

  async findByName(
    name: string,
    options: IPaginationOptions,
  ): Promise<Pagination<Company>> {
    return paginate<Company>(this.repository, options, {
      where: {
        name: Like(`%${name}%`),
      },
    });
  }

  async findOne(id: string): Promise<Company> {
    return this.repository.findOneBy({ id: id });
  }
}
