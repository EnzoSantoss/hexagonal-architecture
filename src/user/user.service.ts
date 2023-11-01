import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepositoryInterface } from './repository/user-interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('userInterface')
    private userInterface: UserRepositoryInterface,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    return await this.userInterface.create(createUserDto);
  }
}
