import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { UserModel } from 'src/user/entities/user.model';

import { MovieUser } from 'src/movie-adm/entities/movie-amd.model';

export type MovieAttributes = {
  name: string;
  price: string;
};

@Table({
  tableName: 'movies',
})
export class MovieModel extends Model<MovieAttributes> {
  @Column
  name: string;

  @Column
  price: number;

  @BelongsToMany(() => UserModel, () => MovieUser)
  users: UserModel[];
}
