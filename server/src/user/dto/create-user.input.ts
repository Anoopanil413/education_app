// src/users/dto/create-user.input.ts
import { InputType, Int, Field } from '@nestjs/graphql';
import { Pos, Role } from '@prisma/client';
import { IsOptional, IsEmail, IsString, IsInt, IsEnum, IsArray, ArrayMinSize, ArrayNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsInt()
  age: number;


  @Field()
  @IsEnum(Role)
  role: Role;

  @Field()
  password:string;

  @Field(() => Int)
  @IsInt()
  departmentId: number;
}


@InputType()
export class SigninUserData{
  @Field()
  @IsEmail()
  email: string;


  @Field()
  password:string;

}
