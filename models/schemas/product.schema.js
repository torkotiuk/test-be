const { Schema } = require('mongoose');

const productSchema = Schema({
  name: {
    type: 'string',
    minlength: 2,
    required: true,
  },
  price: Number,
});

module.exports = productSchema;
