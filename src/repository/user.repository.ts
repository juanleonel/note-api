import { User } from '../interfaces/user';
import Users from '../model/user.model';

class UserRepository {
  constructor(){}

  public async find(params?: any): Promise<Array<User>> {
    return await Users.find(params);
  }

  public async findOne(params?: any): Promise<User | null> {
    return await Users.findOne(params);
  }

  public async add(user: User): Promise<User> {
    try {
      const users = new Users(user);
      await users.save();

      return users;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async update(user: User, query: any): Promise<User> {
    try {
      const update = {
        $set: user
      }
      const result = await Users.findOneAndUpdate(query, update, { new: true });
      if (!result) {
        throw new Error('User not found');
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async deleteById(id: string): Promise<boolean> {
    try {
      const result = await Users.deleteOne({_id: id});

      return result?.deletedCount > 0;
    } catch (error) {
      return false;
    }
  }
}

export default UserRepository;