const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes');
const mongoose = require('mongoose');
const { DB_HOST, PORT = 5000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', routes.products);

//middleware write after all routes, it looks for unavailable routes
app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'server error' } = error;

  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

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
  .then(
    console.log('DataBase was connected successfully'),
    app.listen(PORT, console.log(`Server started on port ${PORT}`)),
  )
  .catch(error => console.log(error));
