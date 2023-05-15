import mongoose from 'mongoose';

export interface DemoDocument extends mongoose.Document {
  name: string;
  age: number;
}

const collectionName = 'demo';

const DemoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const DemoModel = mongoose.model<DemoDocument>(collectionName, DemoSchema, collectionName); //declare collection name a second time to prevent mongoose from pluralizing or adding 's' to the collection name

export { DemoModel };
