import { User } from "@models/user";
import { RequestHandler } from "express";




// const getUser: RequestHandler = async (req, res) => {
//     const id = req.params.id
//     try {
//         const doc = await User.findById({ _id: id })
//         if (doc) {
//             return res.status(200).json({
//                 status: true,
//                 message: { fName: doc.fName, lName: doc.lName, createdAt: doc.createdAt, updatedAt: doc.updatedAt, email: doc.email }
//             })
//         }
//         res.status(200).json({
//             status: true,
//             message: "not Found"
//         })
//     } catch (err: any) {
//         res.status(400).json({
//             status: false,
//             message: err.message
//         })
//     }
// }
// const updateUserSolde: RequestHandler = async (req, res) => {
//     try {
//         var id = req.params.id
//         const filter = { _id: id }
//         await User.findOneAndUpdate(filter, req.body);
//         res.status(200).json({
//             status: true,
//             message: "Updated successfully",
//         })
//     } catch (e: any) {
//         res.status(400).json({
//             status: false,
//             message: e.message
//         })
//     }
// }

export { }
