import { Column, Model, Table } from 'sequelize-typescript';

export type UserAttributes = {
  name: string;
};

@Table
export class UserModel extends Model<UserAttributes> {
  @Column
  name: string;
}
