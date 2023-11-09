import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieAdmDto } from './create-movie-adm.dto';

export class UpdateMovieAdmDto extends PartialType(CreateMovieAdmDto) {}
