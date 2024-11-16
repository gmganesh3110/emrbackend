import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, UpdatePasswordDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  public async loginUser(@Body() loginUserDto: LoginUserDto): Promise<any> {
    return this.authService.loginUser(loginUserDto);
  }

  @Post('updatepassword')
  public async updatePassword(
    @Body()
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<string> {
    return this.authService.updatePassword(updatePasswordDto);
  }

  @UseGuards(AuthGuard)
  @Post('getuserprofile')
  public async getUserProfile(@Req() req: Request): Promise<LoginUserDto> {
    const user = req['user'];
    return user as LoginUserDto;
  }
}
