import express, { Express } from 'express';
import cors from 'cors';
import root from './routes/root';

const port: number = 3001;
const app: Express = express();

app.use(cors());

app.use('/', root);

app.listen(port, () => console.log(`Back listening at http://localhost:${port}`));
