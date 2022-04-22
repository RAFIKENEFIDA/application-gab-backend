import { Schema, model,ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.


export interface IFacture {
    name: string,
    price: number,
    numeroContrat: string,
    state: string, 
    email: string,
    matricule: string,
    telephone: string,
    userId: ObjectId,
    compagnieId: ObjectId, 
    typeFactureId: ObjectId,
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IFacture>(
  {
    name: { type: String, required: false },
    price: { type: Number, required: true },
    numeroContrat: { type: String, required: true },

    state:{
        type: String,
        default: "non paye"
    },
    email: { type: String, required: false },
    matricule: { type: String, required: false },
    telephone: { type: String, required: false },

    userId:{type: Schema.Types.ObjectId, ref: 'User'},
    compagnieId: { type: Schema.Types.ObjectId, ref: 'Compagnie' },
    typeFactureId: { type: Schema.Types.ObjectId, ref: 'TypeFacture' },

  },
  { timestamps: true }
);

// 3. Create a Model.
export const Facture = model<IFacture>('Facture', schema);