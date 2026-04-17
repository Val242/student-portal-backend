import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import 'dotenv/config'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
 
    constructor(
        private authService: AuthService,
        private configService: ConfigService,
      ) {
        const jwtSecret = configService.get<string>('JWT_SECRET_KEY');

        if (!jwtSecret) {
          throw new Error('JWT_SECRET_KEY is missing in .env file');
        }

        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtSecret,
        });
      }

  async validate(payload: any) {
    const user = await this.authService.findUserById(payload.sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}