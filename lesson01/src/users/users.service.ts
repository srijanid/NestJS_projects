import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      "id":1,
      "name": 'Raktim Mitra',
      "email": "raktim.mitra@codeclouds.co.in",
      "role": "INTERN",
    },
    {
      "id":2,
      "name": 'Sayan Adhikari',
      "email": "sayan.adhikari@codeclouds.co.in",
      "role": "INTERN",
    },
    {
      "id":3,
      "name": 'Arjo Ghosh',
      "email": "arjo.ghosh@codeclouds.co.in",
      "role": "INTERN",
    },
    {
      "id":4,
      "name": 'Palas Saha',
      "email": "palas.saha@codeclouds.co.in",
      "role": "ENGNEER",
    },
    {
      "id":5,
      "name": 'Srijani Das',
      "email": "srijani.das@codeclouds.co.in",
      "role": "ADMIN",
    },
  ]

  findAll(role?: 'INTERN'|'ENGINEER'|'ADMIN'){
    if(role){
      const rolesArray = this.users.filter(user =>user.role === role)
    if (rolesArray.length === 0) 
      throw new NotFoundException('User with this role not found!!')
    }
    return this.users
  }

  findOne(id:number){
    const user = this.users.find(user=>user.id === id)
    if (!user) {
      throw new NotFoundException(`User does not exist with this ${id}`);
    }
    return user
  }

  create(createUserDto:CreateUserDto){
    // generate the id for users
    const usersByHighestId = [...this.users].sort((a,b)=> b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }
    this.users.push(newUser) // push the new user
    return newUser
  }

  update(id:number,updateUserDto: UpdateUserDto){
    this.users = this.users.map(user =>{
      if (user.id == id) {
        return {...user,...updateUserDto}
      }
      return user
    })
    return this.findOne(id)
  }

  delete(id:number){
    const removedUser = this.findOne(id)
    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }
}
