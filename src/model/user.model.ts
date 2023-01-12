import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  token:  {
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

export default model<User>('Users', userSchema);
