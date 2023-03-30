// V-1. Educational work with local db file
// const { v4 } = require('uuid');
// const products = require('../../data/products');
// const add = (req, res) => {
//   const newProduct = { ...req.body, _id: v4() };
//   products.push(newProduct);
//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: {
//       result: newProduct,
//     },
//   });
// };
// module.exports = add;

// V-2. Work with MongoDb
const { Product } = require('../../models');

const add = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { result },
    });
  } catch (error) {
    if (error.code === i1000) {
      error.code = 400;
    }
    next(error);
  }
};

module.exports = add;
