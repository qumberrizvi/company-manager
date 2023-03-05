import { Controller, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import {
  ApiBearerAuth,
  ApiOkResponse, ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Team } from './entities/team.entity';
import { Abilities } from '../../decorators/abilities.decorator';
import { Ability } from '../../enums/ability.enum';
import { AbilityGuard } from '../auth/guards/ability.guard';

@ApiTags('Team')
@Controller('teams')
@ApiBearerAuth()
@ApiOkResponse()
@ApiUnauthorizedResponse({
  description: 'Missing or invalid token',
})
@UseGuards(JwtAuthGuard)
export class TeamsController {

  @Post(':companyId')
  @Abilities(Ability.READ_WRITE)
  @UseGuards(AbilityGuard)
  @ApiOperation({ summary: 'Create a team (should have company id in path)' })
  create(
    @Body() createTeamDto: CreateTeamDto,
    @Param('companyId') companyId: string,
  ): Promise<Team> {
    return this.teamsService.create(companyId, createTeamDto);
  }

  constructor(private readonly teamsService: TeamsService) {}
}
