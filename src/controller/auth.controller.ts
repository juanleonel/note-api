import { Request, Response } from 'express';

import { CONFIGURATIONS } from '../config/configurations';
import UserService from '../service/user.service';
import { User } from '../interfaces/user';
import { Utils } from '../config/utils';

import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

class AuthController {
  private readonly _userService: UserService;
  constructor() {
    this._userService = new UserService();
  }

  public doAuth = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (Utils.isNullOrEmpty(email) || Utils.isNullOrEmpty(password)) {
        res.sendStatus(401);
      }

      const result = Utils.toJSON<User>(await this._userService.findOne({ email: email }));
      if (!result) {
        res.sendStatus(401);
      }

      if (bcrypt.compareSync(password, result?.password)) {
        const payload = {
          id: result?._id
        };
        
        res.status(200).send({
          item: result,
          token: jwt.encode(payload, CONFIGURATIONS.KEY_SECRET!)
        })
      }

    } catch (error: any) {
      res.status(500).send({
        ERROR: error.message
      });
    }
  }
}

export default new AuthController();
