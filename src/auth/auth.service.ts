import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto, UpdatePasswordDto, userDetails } from './dto/auth.dto';
import { EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private entityManager: EntityManager,
    private jwtService: JwtService,
  ) {}
  public async loginUser(loginUserDto: LoginUserDto): Promise<userDetails> {
    try {
      const { email, password } = loginUserDto;
      const query = 'call authgetloginuser(?)';
      const params: any[] = [email];
      const users: any = await this.entityManager.query(query, params);
      const user: userDetails[] = users[0];
      if (user.length == 0) {
        throw new NotFoundException('User Not Found');
      }
      const isMatch: boolean = await bcrypt.compare(password, user[0].password);
      if (isMatch) {
        user[0].password = undefined;

        const token = await this.jwtService.signAsync(user[0]);
        user[0].token = token;
        return user[0];
      } else {
        throw new UnauthorizedException('Wrong Password');
      }
    } catch (err:any) {
      console.log(err);
      throw new InternalServerErrorException(
        err.message,
      );
    }
  }

  public async updatePassword(
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<string> {
    try {
      const { email, password } = updatePasswordDto;
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
      const query = 'call authupdatepassword(?,?)';
      const params: any[] = [email, encryptedPassword];
      await this.entityManager.query(query, params);
      return 'Password Updated Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException(
        'Internal Server Error Update Password',
      );
    }
  }
}
