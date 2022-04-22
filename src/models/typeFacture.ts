import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.


export interface IdTypeFacture {
    type: string,
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IdTypeFacture>(
  {
    type: { type: String, required: true },
  

  },
  { timestamps: true }
);

// 3. Create a Model.
export const TypeFacture = model<IdTypeFacture>('TypeFacture', schema);
