import { Request, Response } from 'express';
import { Note } from '../interfaces/note';
import NoteService from '../service/note.service';

class NoteController {
  private readonly _noteService: NoteService;
  constructor() {
    this._noteService = new NoteService();
  }

  public getNote = async(req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await this._noteService.findOne({_id: id});
      res.status(200).send({
        item: result,
        NOTES_ARRAY: 'NOTES_ARRAY'
      })
    } catch (error) {
      res.status(500).send({
        ERROR: error
      });
    }
  }

  public getNotes = async (req: Request, res: Response) => {
    try {
      const result = await this._noteService.find();
      res.status(200).send({
        item: result,
        NOTES_ARRAY: 'NOTES_ARRAY'
      })
    } catch (error) {
      res.status(500).send({
        ERROR: error
      });
    }
  }

  public createNote = async (req: Request, res: Response) => {
    try {
      const note = req.body as Note;
      const result = await this._noteService.add(note);
      res.status(200).send({
        item: result,
        NOTE_CREATED: 'NOTE_CREATED'
      })
    } catch (error) {
      res.status(500).send({
        ERROR: error
      });
    }
  }

  public updateNote = async (req: Request, res: Response) => {
    try {
      const note = req.body as Note;
      const id = req.params.id;
      const result = await this._noteService.update(id, note);
      res.status(201).send({
        item: result,
        NOTE_UPDATED: 'NOTE_UPDATED'
      })
    } catch (error) {
      res.status(500).send({
        ERROR: error
      });
    }
  }

  public deleteNote = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await this._noteService.delete(id);
      res.status(200).send({
        item: result,
        NOTE_DELETE: 'NOTE_DELETE'
      })
    } catch (error) {
      res.status(500).send({
        ERROR: error
      });
    }
  }
}

export default new NoteController();