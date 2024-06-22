import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';

import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { jwtConstants } from './constants';




@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
 async signin(CreateAuthInput:CreateAuthInput):Promise<any>{

    const{email,password} = CreateAuthInput

    const users = await this.usersService.findbyEmail(email)
    if(!users)throw new Error("User not available, Please register")

      const isMatch = await bcrypt.compare(password, users?.password);

      if(!isMatch) throw new UnauthorizedException();
      const payload = { sub: users.id, username: users.name };

      try {
        const token = await this.jwtService.signAsync(payload);
        return {
          access_token: token,
          userdata:users
        };
      } catch (error) {
        console.error('Error signing JWT token:', error);
        throw new Error('Failed to sign JWT token');
      }
     }


  
}
