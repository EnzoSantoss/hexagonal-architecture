import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { UserModel } from 'src/user/entities/user.model';
import { MovieModel } from 'src/movie/entities/movie.model';

@Table
export class MovieUser extends Model {
  @ForeignKey(() => UserModel)
  @Column
  user_id: number;

  @ForeignKey(() => MovieModel)
  @Column
  movie_id: number;
}
