import { Note } from '../interfaces/note';
import Notes from '../model/note.motel';
class NoteRepository {
  constructor(){}

  public async find(params?: any): Promise<Array<Note>> {
    return await Notes.find(params);
  }

  public async findOne(params?: any): Promise<Note | null> {
    return await Notes.findOne(params);
  }

  public async add(note: Note): Promise<Note> {
    const notes = new Notes(note);
    await notes.save();

    return notes;
  }

  public async update(note: Note, query: any): Promise<Note> {
    const update = {
      $set: note
    }
    await Notes.findOneAndUpdate(query, update);
    return note;
  }

  public async deleteById(id: string): Promise<boolean> {
    try {
      const result = await Notes.deleteOne({_id: id});

      return result?.deletedCount > 0;
    } catch (error) {
      return false;
    }
  }
}

export default NoteRepository;