import express, { Request, Response } from 'express';
import MongooseDB from './config/mongoose';
import * as bodyParser from 'body-parser';
import NoteController from './controller/note.controller';

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
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private router(): void{
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello word!!');
    });
    this.app
      .get('/api/notes/', this.Execute(NoteController.getNotes))
      .get('/api/notes/:id', this.Execute(NoteController.getNote))
      .post('/api/notes/', this.Execute(NoteController.createNote))
      .put('/api/notes/:id', this.Execute(NoteController.updateNote))
      .delete('/api/notes/:id', this.Execute(NoteController.deleteNote))
  }

  private Execute(func: any): any {
    return function(req: Request, res: Response, next: any) {
      func(req, res, next).catch(next);
    }
  }
}

export default new App();
