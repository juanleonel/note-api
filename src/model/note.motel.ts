import { Schema, model } from 'mongoose';
import { Note } from '../interfaces/note';

const noteSchema = new Schema<Note>({
  title: {
    type: String,
    required: false
  },
  resume: {
    type: String,
    required: false
  },
  createAt: {
    type: Date,
    required: false
  },
  isActive: {
    type: Boolean,
    required: false,
  }
});

export default model<Note>('Notes', noteSchema);
