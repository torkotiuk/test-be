const { Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
});

module.exports = productSchema;
