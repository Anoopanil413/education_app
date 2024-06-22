import { InputType, Int, Field } from '@nestjs/graphql';
import { Grade, Pos } from '@prisma/client';
import { ArrayNotEmpty, IsArray, IsEnum, IsOptional } from 'class-validator';

@InputType()
export class CreateDepartmentInput {

  @Field()
  @IsEnum(Pos)
  post:Pos

  @Field()
  @IsEnum(Grade)
  level:Grade;


  @Field(() => [Int],{ nullable: true })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  users?: number[];

}
