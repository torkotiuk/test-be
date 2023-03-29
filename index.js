const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const mongoose = require('mongoose');
const { DB_HOST } = process.env;
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', routes.products);

app.get('/', (_, res) => {
  res.send(
    'API is running...... & https://puzzled-bear-underwear.cyclic.app//api/v1/products',
  );
});

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DataBase was connected successfully'))
  .catch(error => console.log(error));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
