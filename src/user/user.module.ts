import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './entities/user.model';
import { UserRepositorySequelize } from './repository/user-sequelize';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepositorySequelize,
    { provide: 'userInterface', useExisting: UserRepositorySequelize },
  ],
})
export class UserModule {}
