import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ required: true, example: 'Jane Doe' })
  lead: string;
}
