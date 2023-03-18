const express = require('express'); 
const cors = require('cors'); 
const dotenv = require('dotenv');
const routes = require('./routes');

const app = express(); 
dotenv.config();

app.use(cors()); 
app.use(express.json());
app.use('/api/v1/products', routes.products);

app.get('/', (_, res) => { 
  res.send('API is running......');
  res.send('Test products page on https://puzzled-bear-underwear.cyclic.app//api/v1/products');
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log(`Server started on port ${PORT}`));