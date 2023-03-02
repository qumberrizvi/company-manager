import { Controller, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Team } from './entities/team.entity';

@ApiTags('Team')
@Controller('teams')
@ApiBearerAuth()
@ApiOkResponse()
@ApiUnauthorizedResponse({
  description: 'Missing or invalid token',
})
@UseGuards(JwtAuthGuard)
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post(':companyId')
  create(
    @Body() createTeamDto: CreateTeamDto,
    @Param('companyId') companyId: string,
  ): Promise<Team> {
    return this.teamsService.create(companyId, createTeamDto);
  }
}
