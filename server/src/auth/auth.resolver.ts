import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { User } from 'src/user/entities/user.entity';

import { Public } from './decorators/public.decorator';


@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  
  @Public()
  @Mutation(() => AuthResponse)
  async signin(@Args('signin') userSignin: CreateAuthInput): Promise<AuthResponse> {

    let val = await this.authService.signin(userSignin)
    return val;
  }
}
