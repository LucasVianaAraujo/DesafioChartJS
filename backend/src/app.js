import AdicionarRotas from './routes.js';

import { connection } from './repository/connection.js'

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const PORT = process.env.PORT || 5001


const api = express();
api.use(express.json());
api.use(cors());

AdicionarRotas(api);

connection();
api.listen(PORT, () => console.log('API subiu rodando na porta ' + PORT + '.'));