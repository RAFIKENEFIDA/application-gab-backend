import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.


export interface IUser {
    firstname: string,
    lastname: string,
    numeroAccount: string,
    ccn: string,
    pin: number,
    cin:string,
    solde:number,
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    numeroAccount: { type: String, required: true },
    ccn: { type: String, required: true },
    pin: { type: Number, required: true },
    cin: { type: String, required: true },
    solde: { type: Number, required: true },
  
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
