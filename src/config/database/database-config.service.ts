import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  get host(): string {
    return this.configService.get('database.host');
  }

  get port(): number {
    return this.configService.get('database.port');
  }

  get user(): string {
    return this.configService.get('database.user');
  }

  get password(): string {
    return this.configService.get('database.password');
  }

  get rootPassword(): string {
    return this.configService.get('database.rootPassword');
  }
}
