import { Ability } from '../enums/ability.enum';
import { SetMetadata } from '@nestjs/common';

export const ABILITY_KEY = 'ability';
export const Abilities = (...abilities: Ability[]) =>
  SetMetadata(ABILITY_KEY, abilities);
