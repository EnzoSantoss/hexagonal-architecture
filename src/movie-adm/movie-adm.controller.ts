import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieAdmService } from './movie-adm.service';
import { CreateMovieAdmDto } from './dto/create-movie-adm.dto';
import { UpdateMovieAdmDto } from './dto/update-movie-adm.dto';

@Controller('movie-adm')
export class MovieAdmController {
  constructor(private readonly movieAdmService: MovieAdmService) {}

  @Post()
  create(@Body() createMovieAdmDto: CreateMovieAdmDto) {
    return this.movieAdmService.create(createMovieAdmDto);
  }

  @Get()
  findAll() {
    return this.movieAdmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieAdmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieAdmDto: UpdateMovieAdmDto) {
    return this.movieAdmService.update(+id, updateMovieAdmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieAdmService.remove(+id);
  }
}
