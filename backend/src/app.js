import AdicionarRotas from './routes.js';

import { connection } from './repository/connection.js'

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const PORT = 5001;

connection();

const api = express();
api.use(express.json());
api.use(cors());

AdicionarRotas(api);

api.listen(PORT, () => console.log('API subiu rodando na porta ' + PORT + '.'));