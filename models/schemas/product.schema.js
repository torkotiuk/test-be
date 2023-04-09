const { Schema } = require('mongoose');

const productSchema = Schema({
  name: {
    type: String,
    minlength: [2, 'Product name should be named at minimum with two letters'],
    required: [true, 'Product name should be provided'],
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  price: {
    type: Number,
    min: 0.01,
    required: true,
  },
  // article: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  active: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ['basic', 'stock', 'less'],
    default: 'basic',
  },
});

module.exports = productSchema;
