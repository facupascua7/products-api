import express from 'express';
import morgan from 'morgan';

import productsRoute from './routes/products.routes';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to this API');
});

app.use('/products', productsRoute);

export default app;