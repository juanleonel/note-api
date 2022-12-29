import { Note } from '../interfaces/note';
import NoteRepository from '../repository/note.repository';
class NoteService {
  private readonly _noteRepository: NoteRepository;
  constructor(){
    this._noteRepository = new NoteRepository();
  }

  public async add(note: Note): Promise<Note> {
    note.createAt = new Date();
    return this._noteRepository.add(note);
  }

  public async findOne(params?: any): Promise<Note | null> {
    return this._noteRepository.findOne(params);
  }

  public async find(params?: any): Promise<Array<Note>> {
    return this._noteRepository.find(params);
  }

  public async update(id: string, note: Note): Promise<Note | null> {
    const query = {
      _id: id
    };

    return this._noteRepository.update(note, query);
  }

  public async delete(id: string): Promise<boolean> {
    return this._noteRepository.deleteById(id);
  }
}

export default NoteService;