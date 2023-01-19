import express from 'express';
import morgan from 'morgan';

import { createRoles } from './libs/inicialSetup';

import productsRoute from './routes/products.routes';
import authRoute from './routes/auth.routes';
import userRoute from './routes/user.routes';

const app = express();
createRoles();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to this API');
});

app.use('/products', productsRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);

export default app;