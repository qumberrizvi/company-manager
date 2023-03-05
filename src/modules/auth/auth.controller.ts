import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: LoginDto,
  })
  @ApiOperation({
    summary: 'Login with read or read-write scopes',
    description:
      'For <strong>write</strong> access, login using:' +
      '<br/> ' +
      'email: <strong>qumber@mail.com</strong>' +
      '<br/>' +
      'password: <strong>qumber@123</strong>' +
      '<br/>' +
      '<br/>' +
      'For <strong>read</strong> only access, login using:' +
      '<br/> ' +
      'email: <strong>john@mail.com</strong>' +
      '<br/>' +
      'password: <strong>john@123</strong>',
  })
  async login(@Request() request) {
    return this.authService.login(request.user);
  }
}
