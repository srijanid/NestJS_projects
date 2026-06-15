import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}
  create(createEmployeeDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createEmployeeDto
    })
  }

  findAll(role?: 'INTERN'|'ENGINEER'|'ADMIN') {
    return this.databaseService.user.findMany({
      where:{
        role,
      }
    })
    return this.databaseService.user.findMany
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where:{
        id,
      }
    })
  }

  update(id: number, updateEmployeeDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where:{
        id,
      },
      data: updateEmployeeDto,
    })
  }

  remove(id: number) {
    return this.databaseService.user.delete({
      where:{
        id,
      }
    })
  }
}
