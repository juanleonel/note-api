import { User } from '../interfaces/user';
import UserRepository from '../repository/user.repository';
import bcrypt from 'bcrypt';

class UserService {
  private readonly _userRepository: UserRepository;
  constructor(){
    this._userRepository = new UserRepository();
  }

  public async add(user: User): Promise<User> {
    user.createAt = new Date();
    user.password = await this.getHash(user.password);
    user.isActive = true;

    return this._userRepository.add(user);
  }

  public async findOne(params?: any): Promise<User | null> {
    return this._userRepository.findOne(params);
  }

  public async find(params?: any): Promise<Array<User>> {
    return this._userRepository.find(params);
  }

  public async update(id: string, user: User): Promise<User | null> {
    const query = {
      _id: id
    };

    return this._userRepository.update(user, query);
  }

  public async delete(id: string): Promise<boolean> {
    return this._userRepository.deleteById(id);
  }

  private async getHash(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync();
    return await bcrypt.hashSync(password, salt);
  }
}

export default UserService;
