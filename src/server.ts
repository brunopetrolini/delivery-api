/* eslint-disable no-console */
import express from 'express';
import dotEnv from 'dotenv';
import { routes } from './routes';

dotEnv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server is running'));
