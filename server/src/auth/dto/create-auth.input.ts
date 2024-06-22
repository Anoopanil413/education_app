import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateAuthInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password:string;

}
