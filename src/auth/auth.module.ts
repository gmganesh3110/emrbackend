import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './constants/authConstant';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: authConstants.secret,
      signOptions: {
        expiresIn: '7d', // Adjust to your desired expiration period
      },
    }),
  ],
})
export class AuthModule {}
