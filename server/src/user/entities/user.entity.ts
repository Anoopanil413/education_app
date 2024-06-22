import { ObjectType, Field, Int } from '@nestjs/graphql';
import {  Pos, Role } from '@prisma/client';
import { Department } from 'src/department/entities/department.entity';
// import { Pos, Role } from '../enums'; // Adjust import path
// import { Department } from './department.entity'; // Ensure this import exists

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field()
  role:string;

  @Field()
  password:string;


  @Field(() => Department)
  department: Department;
}


// @ObjectType()
// export class Department {
//   @Field(() => Int)
//   id: number;

//   @Field()
//   post: string; // Adjust type as necessary

//   @Field()
//   level: string; // Adjust type as necessary

//   @Field(() => Date)
//   date: Date;

//   @Field(() => [User], { nullable: true })
//   users?: User[];
// }