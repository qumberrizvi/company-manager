import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiOkPaginatedResponse } from '../../decorators/api-ok-paginated-response.decorator';
import { Company } from './entities/company.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Abilities } from '../../decorators/abilities.decorator';
import { Ability } from '../../enums/ability.enum';
import { AbilityGuard } from '../auth/guards/ability.guard';

@ApiTags('Company')
@Controller('companies')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Missing or invalid token',
})
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @Abilities(Ability.READ_WRITE)
  @UseGuards(AbilityGuard)
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  @ApiOkPaginatedResponse(Company)
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Company>> {
    return this.companiesService.findAll({
      page,
      limit,
      route: '/companies',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findOne(id);
  }
}
