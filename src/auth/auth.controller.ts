import { Body, Controller, Post, UnauthorizedException, UseGuards,Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@UseGuards(LocalAuthGuard)


export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    async signUp(@Body() registerDto: RegisterDto){
         console.log('Received DTO:', registerDto);
    return this.authService.register(registerDto);
  }
    
    @Post('login')
    async login(
      @Body() loginDto: LoginDto
    ){
      const user = await this.authService.validateUser(loginDto.email, loginDto.password)
      if(user instanceof UnauthorizedException){
        throw user
      }
      return this.authService.login(user)
    }

    // @Get('user')
    //  @UseGuards(JwtAuthGuard)
    // getUser(@Request() req:any){
    //     return this.authService.findUserById(req.user)
    // }
}
