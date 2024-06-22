import { Injectable } from '@nestjs/common';
import { CreateUserInput, SigninUserData } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const { name, email, age, role, departmentId, password } = createUserInput;

    // Check if user with the same email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Check if the specified department exists
    const existingDepartment = await this.prisma.department.findUnique({
      where: { id: departmentId },
    });

    if (!existingDepartment) {
      throw new Error(`Department with id ${departmentId} does not exist`);
    }

    // Hash the password
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    // Create the user in the database and connect to department
    const createdUser = await this.prisma.user.create({
      data: {
        name,
        email,
        age,
        role,
        password: hashedPassword,
        department: {
          connect: { id: departmentId }, // Connect user to department
        },
      },
      include: {
        department: true, // Include department data in the response
      },
    });

    // Update the department to include the new user
  const updateddepartment =   await this.prisma.department.update({
      where: { id: departmentId },
      data: {
        users: {
          connect: { id: createdUser.id }, // Connect user to department's users list
        },
      },
    });



    return createdUser; // Return the created user with department data
  }






  async findbyEmail(email:string):Promise<any>{

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,

      },
    });

    if(!existingUser)throw new Error("User Not available");
    return existingUser
  }

  async findAll():Promise<any[]> {


    const usersList = this.prisma.user.findMany()

    return usersList
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if(!existingUser)throw new Error("User not available");

    const deleteUser = await this.prisma.user.delete({where:{id}})


    return deleteUser;
  }
}
