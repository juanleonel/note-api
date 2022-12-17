import { Schema, model, connect } from "mongoose";
import { Test } from "./test";

const testSchema = new Schema<Test>({
  thing: {
    type: String,
    required: false
  }
});

export default model<Test>('Test', testSchema)
