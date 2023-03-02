import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateCompanyDto {
  @ApiProperty({ required: true, example: 'Company Pvt Ltd' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  ceo: string;

  @ApiProperty({ required: false, example: 'Victoria Street, Lucknow, India' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ required: false, example: '1990/12/31' })
  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @MaxDate(new Date())
  inception?: Date;
}
