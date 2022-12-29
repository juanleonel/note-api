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
    try {
      const notes = new Notes(note);
      await notes.save();

      return notes;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async update(note: Note, query: any): Promise<Note> {
    try {
      const update = {
        $set: note
      }
      const result = await Notes.findOneAndUpdate(query, update, { new: true });
      if (!result) {
        throw new Error('Note not found');
      }

      return note;
    } catch (error: any) {
      throw new Error(error.message);
    }
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