import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class AuthResponse {
  @Field()
  access_token: string;
  
  @Field()
  userdata:User
}