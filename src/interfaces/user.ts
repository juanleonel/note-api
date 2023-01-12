export interface User {
  _id?: string;
  name: string;
  password: string;
  lastName: string;
  email: string;
  token?: string;
  createAt?: Date;
  isActive?: boolean;
}
