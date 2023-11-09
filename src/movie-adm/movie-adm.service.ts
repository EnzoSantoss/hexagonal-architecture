import { Injectable } from '@nestjs/common';
import { CreateMovieAdmDto } from './dto/create-movie-adm.dto';
import { UpdateMovieAdmDto } from './dto/update-movie-adm.dto';

@Injectable()
export class MovieAdmService {
  create(createMovieAdmDto: CreateMovieAdmDto) {
    return 'This action adds a new movieAdm';
  }

  findAll() {
    return `This action returns all movieAdm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieAdm`;
  }

  update(id: number, updateMovieAdmDto: UpdateMovieAdmDto) {
    return `This action updates a #${id} movieAdm`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieAdm`;
  }
}
