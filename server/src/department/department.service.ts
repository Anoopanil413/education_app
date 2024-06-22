import { Injectable } from '@nestjs/common';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DepartmentService {

  constructor(private readonly prisma:PrismaService){}
  async create(createDepartmentInput: CreateDepartmentInput):Promise<Department> {

    const{post,level,users} = createDepartmentInput;

    const isDepAvail = await this.prisma.department.findFirst({
      where: {
        post,
        level,
      },
    });

    if (isDepAvail) {
      throw new Error('Department with the given post and level already exists');
    }

    // Convert user IDs into Prisma's expected format
    const usersInput = users?.map(userId => ({ id: userId }));

    return await this.prisma.department.create({
      data: {
        post,
        level,
        users: {
          connect: usersInput,
        },
      },
    });


  }

  findAll() {
    return `This action returns all department`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
