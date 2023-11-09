import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { MovieModel } from 'src/movie/entities/movie.model';
import { MovieUser } from 'src/movie-adm/entities/movie-amd.model';

export type UserAttributes = {
  name: string;
};

@Table({
  tableName: 'users',
})
export class UserModel extends Model<UserAttributes> {
  @PrimaryKey
  @Column({
    type: DataType.STRING, // Definindo o tipo da coluna como string
    primaryKey: true, // Marcando como chave primária
  })
  user_id: string;

  @Column
  name: string;

  @BelongsToMany(() => MovieModel, () => MovieUser)
  movies: MovieModel[];
}
