import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Ability } from '../../../enums/ability.enum';
import { ABILITY_KEY } from '../../../decorators/abilities.decorator';

@Injectable()
export class AbilityGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredAbilities = this.reflector.getAllAndOverride<Ability[]>(
      ABILITY_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredAbilities) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredAbilities.some((ability) =>
      user.ability?.includes(ability),
    );
  }
}
