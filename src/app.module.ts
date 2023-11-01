import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserModel } from './user/entities/user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      autoLoadModels: true,
      username: 'root', // Seu nome de usuário do banco de dados
      password: 'Enzo123321456', // Sua senha do banco de dados
      database: 'clean_nest',
      models: [UserModel],
      synchronize: true, // Sincroniza automaticamente os modelos com o banco de dados (cuidado em produção)
      logging: console.log, // Para exibir consultas SQL no console para fins de depuração
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
