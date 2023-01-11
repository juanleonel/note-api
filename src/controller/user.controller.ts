import { Request, Response } from 'express';
import { User } from '../interfaces/user';
import UserRepository from '../service/user.service';

class UserController {
  private readonly _userService: UserRepository;
  constructor() {
    this._userService = new UserRepository();
  }

  public getUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await this._userService.findOne({_id: id});
      res.status(200).send({
        item: result,
        USERS_ARRAY: 'USERS_ARRAY'
      })
    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }

  public getUsers = async (req: Request, res: Response) => {
    try {
      const result = await this._userService.find();
      res.status(200).send({
        item: result,
        USERS_ARRAY: 'USERS_ARRAY'
      })
    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      const user = req.body as User;
      const result = await this._userService.add(user);
      res.status(200).send({
        item: result,
        USER_CREATED: 'USER_CREATED'
      })
    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }

  public updateUser = async (req: Request, res: Response) => {
    try {
      const user = req.body as User;
      const id = req.params.id;
      const result = await this._userService.update(id, user);
      res.status(201).send({
        item: result,
        USER_UPDATED: 'USER_UPDATED'
      })
    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await this._userService.delete(id);
      res.status(200).send({
        item: result,
        USER_DELETE: 'USER_DELETE'
      })
    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }
}

export default new UserController();
