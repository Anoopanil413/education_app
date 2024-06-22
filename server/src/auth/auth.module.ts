import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.gaurd';


import { jwtConstants } from './constants';




@Module({
  imports:[ 
    UserModule,
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1d' },
  })

],
  providers: [AuthResolver, AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
  exports: [AuthService],

})
export class AuthModule {}
