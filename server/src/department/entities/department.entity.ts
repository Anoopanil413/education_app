import { ObjectType, Field, Int, DateScalarMode } from '@nestjs/graphql';
import { Grade, Pos } from '@prisma/client';

@ObjectType()
export class Department {
  @Field()
  post:Pos

  @Field()
  level:Grade;

  @Field({ nullable: true })
  date:Date;

  @Field(() => [Int], { nullable: true })
  users?: number[];


}
