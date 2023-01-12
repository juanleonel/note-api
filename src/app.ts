import express, { Request, Response } from 'express';
import MongooseDB from './config/mongoose';
import * as bodyParser from 'body-parser';
import NoteController from './controller/note.controller';
import userController from './controller/user.controller';
import AuthController from './controller/auth.controller';
import jwtFunction from './config/auth/Jwt';

class App {
  public app = express();
  constructor() {
    this.config();
    this.initDb();
    this.router();
  }

  private initDb(): void {
    MongooseDB();
  }

  private config(): void {
    this.app.use(jwtFunction().initialize());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private router(): void{
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello word!!');
    });
    this.app
      .get('/api/notes/', jwtFunction().authenticate(), this.Execute(NoteController.getNotes))
      .get('/api/notes/:id',jwtFunction().authenticate(), this.Execute(NoteController.getNote))
      .post('/api/notes/', jwtFunction().authenticate(), this.Execute(NoteController.createNote))
      .put('/api/notes/:id', jwtFunction().authenticate(), this.Execute(NoteController.updateNote))
      .delete('/api/notes/:id', jwtFunction().authenticate(), this.Execute(NoteController.deleteNote))

    this.app
      .get('/api/users/', jwtFunction().authenticate(), this.Execute(userController.getUsers))
      .get('/api/users/:id', jwtFunction().authenticate(), this.Execute(userController.getUser))
      .post('/api/users/', jwtFunction().authenticate(), this.Execute(userController.createUser))
      .put('/api/users/:id', jwtFunction().authenticate(), this.Execute(userController.updateUser))
      .delete('/api/users/:id', jwtFunction().authenticate(), this.Execute(userController.deleteUser));
    
    this.app.post('/api/auth', this.Execute(AuthController.doAuth))
  }

  private Execute(func: any): any {
    return function(req: Request, res: Response, next: any) {
      func(req, res, next).catch(next);
    }
  }
}

export default new App();
