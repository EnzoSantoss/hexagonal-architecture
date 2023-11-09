import { Module } from '@nestjs/common';
import { MovieAdmService } from './movie-adm.service';
import { MovieAdmController } from './movie-adm.controller';

@Module({
  controllers: [MovieAdmController],
  providers: [MovieAdmService],
})
export class MovieAdmModule {}
