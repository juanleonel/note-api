import { Schema, model, connect } from "mongoose";
import { Test } from "../interfaces/test";

const testSchema = new Schema<Test>({
  thing: {
    type: String,
    required: false
  }
});

export default model<Test>('Test', testSchema)
