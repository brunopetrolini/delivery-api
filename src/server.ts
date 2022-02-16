/* eslint-disable no-console */
import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'ok' }));

app.listen(3000, () => console.log('Server is running'));
