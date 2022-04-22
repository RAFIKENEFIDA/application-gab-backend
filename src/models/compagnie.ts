import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.


export interface ICompagnie {
    name: string,
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ICompagnie>(
  {
    name: { type: String, required: true },
  

  },
  { timestamps: true }
);

// 3. Create a Model.
export const Compagnie = model<ICompagnie>('Compagnie', schema);
