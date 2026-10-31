// import { Product } from "../models/Product.js";

// const createProduct = async (req, res) => {
//    const {name, description, price, quantity} = req.body;

//    if (!name || !price || !quantity) {
//         return res.status(404).json({ message: 'Name, Price, Qauntity is required'})
//    }
//    try {
//     const product = {
//         name,
//         description,
//         price, 
//         quantity,
//     }
//     const createProduct = await Product.insertOne(product);

//     return res.status(201).json(createProduct);
//    } catch (error) {
//     return res.status(500).json({message: `Internal Server Error: ${error} `});
//    }
// };

// const getProduct = async (req, res) => {
//     const {id} = req.params;

//     if (!id) {
//         return res.status(409).json({ message: 'Id params is missing'});
//     }

//     try {
//         const product = await Product.findById({ _ id: id});

//         if (!product) {
//             return res.status(404).json({ message: 'Record Not Found'});
//         }

//         return res.status(200).json({ product});
//     } catch (error) {
//         return res.status(500).json({ message: `Internal Server Error: ${error}`})
//     }
// }

// const deleteProduct = async (req, res) => {
//     try {
//         const deletedProduct = await db.Product.delete();
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error'})
//     }
// }


// export { createProduct, getProduct};