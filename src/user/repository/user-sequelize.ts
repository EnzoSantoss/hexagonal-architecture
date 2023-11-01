import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../entities/user.model';
import { UserRepositoryInterface } from './user-interface';

export class UserRepositorySequelize implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}
  async create(user: any): Promise<any> {
    const teste = {
      name: 'teste',
    };

    return await this.userModel.create(teste);
  }
}
