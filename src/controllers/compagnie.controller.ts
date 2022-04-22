import { User } from "@models/user";
import { RequestHandler } from "express";
import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { Compagnie } from '@models/Compagnie';


// create Compagnie
const createCompagnie = async (req: Request, res: Response) => {
    
    interface ICompagnie {
        name: string,
    }
    const data = req.body as ICompagnie

    try {

        const compagnie:any = await Compagnie.create(data);

        await compagnie.save((err:any, compagnie:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.send({ message: "compagnie was register successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get all compagnies
 const getCenters = catchAsync(async (req: Request, res: Response) => {
    

    try{

        const compagnies = await Compagnie.find();
  
    res.status(200).json({
      compagnies,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });
export { createCompagnie, getCenters}
